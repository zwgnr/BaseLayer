import type {
	ComponentMeta,
	ComponentRegistry,
	ComponentRegistryEntry,
} from "@baselayer/registry";
import glob from "fast-glob";

import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COMPONENTS_DIR = "src/core";
const TEMPLATES_DIR = "../../web/public/templates";
const OUTPUT_REGISTRY_TS = "src/registry.ts";
const OUTPUT_REGISTRY_JSON = "../../web/public/registry.json";
const TAILWIND_SOURCE = "src/tailwind.css";
const TAILWIND_OUTPUT = "../../web/public/tailwind.css";

interface ComponentWithTemplate extends ComponentRegistryEntry {
	templateContent: string;
}

async function generateRegistry(): Promise<void> {
	console.log("🔍 Discovering components...");

	// Find all component directories with meta.json files
	const metaFiles = await glob(`${COMPONENTS_DIR}/*/meta.json`);

	console.log(`📦 Found ${metaFiles.length} components`);

	const components: ComponentWithTemplate[] = [];

	for (const metaFilePath of metaFiles) {
		try {
			const component = await processComponent(metaFilePath);
			if (component) {
				components.push(component);
				console.log(`✅ Processed ${component.id}`);
			}
		} catch (error) {
			console.error(`❌ Failed to process ${metaFilePath}:`, error);
		}
	}

	// Sort components by id for consistent output
	components.sort((a, b) => a.id.localeCompare(b.id));

	// Get package version
	const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
	const version = packageJson.version;

	// Read tailwind.css content
	const tailwindContent = readFileSync(TAILWIND_SOURCE, "utf8");

	// Get git commit hash for deterministic build identifier
	let buildHash: string;
	try {
		const { execSync } = await import("node:child_process");
		buildHash = execSync("git rev-parse HEAD", {
			encoding: "utf8",
		}).trim();
	} catch {
		// Fallback to version if git is not available
		buildHash = `fallback-${version}`;
	}

	const registry: ComponentRegistry = {
		buildHash,
		version,
		components: components.map(({ templateContent, ...comp }) => comp),
	};

	// Generate TypeScript registry file with inlined templates and CSS
	await generateRegistryTS(registry, components, tailwindContent);

	// Generate JSON registry file
	await generateRegistryJSON(registry);

	// Copy tailwind.css to public directory
	await copyTailwindCSS();

	console.log(`🎉 Generated registry with ${components.length} components`);
}

async function processComponent(
	metaFilePath: string,
): Promise<ComponentWithTemplate | null> {
	// Extract component id from path (e.g., src/core/button/meta.json -> button)
	const componentId = metaFilePath.split("/").slice(-2, -1)[0];

	// Read component metadata
	const metaContent = readFileSync(metaFilePath, "utf8");
	const meta: ComponentMeta = JSON.parse(metaContent);

	// Read template file content
	const templatePath = join(TEMPLATES_DIR, `${componentId}.txt`);
	if (!existsSync(templatePath)) {
		console.warn(
			`⚠️  Template file not found for ${componentId}: ${templatePath}`,
		);
		return null;
	}

	const templateContent = readFileSync(templatePath, "utf8");

	return {
		id: componentId,
		template: `/templates/${componentId}.txt`,
		templateContent,
		meta: {
			name: meta.name,
			category: meta.category,
			status: meta.status,
			description: meta.description,
			tags: meta.tags,
		},
	};
}

async function generateRegistryTS(
	registry: ComponentRegistry,
	componentsWithTemplates: ComponentWithTemplate[],
	tailwindContent: string,
): Promise<void> {
	const componentsArray = registry.components
		.map(
			(comp) =>
				`    ${JSON.stringify(comp, null, 4).replace(/^/gm, "    ").trim()}`,
		)
		.join(",\n");

	const componentIds = registry.components
		.map((comp) => `"${comp.id}"`)
		.join(" | ");

	const templateMap = componentsWithTemplates
		.map((comp) => `  "${comp.id}": ${JSON.stringify(comp.templateContent)}`)
		.join(",\n");

	const registryContent = `// Auto-generated registry from registry data
// Do not edit manually - regenerate with 'pnpm build'

import type { ComponentRegistry, ComponentRegistryEntry } from '@baselayer/registry';

const registry: ComponentRegistry = {
  "buildHash": "${registry.buildHash}",
  "version": "${registry.version}",
  "components": [
${componentsArray}
  ]
};

const templateContents: Record<string, string> = {
${templateMap}
};

const tailwindCSS = ${JSON.stringify(tailwindContent)};

export default registry;

// Helper functions
export type ComponentId = ${componentIds || "string"};

export function getComponent(id: ComponentId): ComponentRegistryEntry | null {
  return registry.components.find(comp => comp.id === id) || null;
}

export function getComponentsByCategory(category: string): ComponentRegistryEntry[] {
  return registry.components.filter(comp => comp.meta.category === category);
}

export function getComponentsByStatus(status: string): ComponentRegistryEntry[] {
  return registry.components.filter(comp => comp.meta.status === status);
}

export function searchComponents(query: string): ComponentRegistryEntry[] {
  const lowercaseQuery = query.toLowerCase();
  return registry.components.filter(comp => 
    comp.id.toLowerCase().includes(lowercaseQuery) ||
    comp.meta.name.toLowerCase().includes(lowercaseQuery) ||
    comp.meta.description.toLowerCase().includes(lowercaseQuery) ||
    comp.meta.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getComponentTemplate(id: ComponentId): string | null {
  return templateContents[id] || null;
}

export function getTailwindCSS(): string {
  return tailwindCSS;
}

export { registry };
export const COMPONENTS = registry.components;
export type { ComponentRegistry, ComponentRegistryEntry };
`;

	writeFileSync(OUTPUT_REGISTRY_TS, registryContent);
	console.log("📝 Generated registry.ts with inlined templates and CSS");
}

async function generateRegistryJSON(
	registry: ComponentRegistry,
): Promise<void> {
	const jsonContent = JSON.stringify(registry, null, 2);
	writeFileSync(OUTPUT_REGISTRY_JSON, jsonContent);
	console.log("📝 Generated registry.json");
}

async function copyTailwindCSS(): Promise<void> {
	try {
		copyFileSync(TAILWIND_SOURCE, TAILWIND_OUTPUT);
		console.log("📝 Copied tailwind.css to public directory");
	} catch (error) {
		console.error("❌ Failed to copy tailwind.css:", error);
	}
}

// Run the generator
generateRegistry().catch(console.error);
