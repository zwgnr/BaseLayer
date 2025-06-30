import glob from "fast-glob";

import {
	type ComponentManifest,
	type ComponentManifestEntry,
	ComponentManifestEntrySchema,
	ComponentManifestSchema,
	type ComponentMeta,
	ComponentMetaSchema,
} from "../src/schema";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname } from "node:path";

async function generateManifest(): Promise<void> {
	console.log("🔍 Discovering components...");

	// Discover component files in the core directory only
	const componentPaths = await glob("src/core/**/*.{tsx,ts}", {
		ignore: [
			"**/*.test.*",
			"**/*.stories.*",
			"**/node_modules/**",
			"**/index.{tsx,ts}",
			"**/registry.{tsx,ts}",
			"**/schema.{tsx,ts}",
			"**/examples/**",
			"**/meta.json",
		],
	});

	console.log(`📦 Found ${componentPaths.length} component files`);

	// Create public directory structure
	const publicDir = "../../web/public";
	const publicTemplatesDir = `${publicDir}/templates`;
	if (!existsSync(publicTemplatesDir)) {
		mkdirSync(publicTemplatesDir, { recursive: true });
	}

	const components: ComponentManifestEntry[] = [];

	for (const filePath of componentPaths) {
		try {
			const component = await processComponent(filePath);
			if (component) {
				// Validate component entry using Zod
				const validatedComponent =
					ComponentManifestEntrySchema.parse(component);
				components.push(validatedComponent);
				console.log(`✅ Processed ${component.meta.name}`);

				// Generate clean template file (just copy the component file)
				await generateCleanTemplate(filePath, component);
			}
		} catch (error) {
			console.error(`❌ Failed to process ${filePath}:`, error);
		}
	}

	// Read package version
	const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

	// Generate manifest
	const manifest: ComponentManifest = {
		generatedAt: new Date().toISOString(),
		version: packageJson.version,
		components,
	};

	// Validate the entire manifest using Zod before writing
	try {
		const validatedManifest = ComponentManifestSchema.parse(manifest);

		// Write manifest to public for static serving
		const manifestPath = `${publicDir}/manifest.json`;
		writeFileSync(manifestPath, JSON.stringify(validatedManifest, null, 2));

		console.log(`🎉 Generated manifest with ${components.length} components`);
		console.log(`📄 Manifest saved to: ${manifestPath}`);

		// Generate registry-v2.ts with validated manifest
		await generateRegistry(validatedManifest);
	} catch (validationError) {
		console.error(`❌ Manifest validation failed:`, validationError);
		throw validationError;
	}

	// Copy tailwind.css to public directory for static serving
	const tailwindCssPath = `${publicDir}/tailwind.css`;
	const tailwindCssContent = readFileSync("src/tailwind.css", "utf8");
	writeFileSync(tailwindCssPath, tailwindCssContent);

	console.log(`📁 Clean templates saved to: ${publicTemplatesDir}/`);
	console.log(`🎨 Tailwind CSS saved to: ${tailwindCssPath}`);
}

async function processComponent(
	filePath: string,
): Promise<ComponentManifestEntry | null> {
	const componentDir = dirname(filePath);
	const metaPath = `${componentDir}/meta.json`;

	// Check if meta.json exists
	if (!existsSync(metaPath)) {
		console.warn(`⚠️  No meta.json found for ${filePath}`);
		return null;
	}

	// Read and parse meta.json
	const metaContent = readFileSync(metaPath, "utf8");
	let metaValue: ComponentMeta;

	try {
		const parsedMeta = JSON.parse(metaContent);
		metaValue = ComponentMetaSchema.parse(parsedMeta);
	} catch (error) {
		console.warn(`⚠️  Could not parse meta.json for ${filePath}:`, error);
		return null;
	}

	// Generate id from meta.name (now always lowercase)
	const id = metaValue.name

	// Use original filename but with .txt extension for template
	const originalFileName = basename(filePath).replace(/\.tsx?$/, ".txt");

	return {
		id,
		template: `/templates/${originalFileName}`,
		meta: metaValue,
	};
}

async function generateRegistry(manifest: ComponentManifest): Promise<void> {
	const registryContent = `// Auto-generated registry from manifest
// Do not edit manually - regenerate with 'pnpm build'

import type { ComponentManifest, ComponentManifestEntry } from './schema';

const manifest: ComponentManifest = ${JSON.stringify(manifest, null, 2)};

export const COMPONENTS: readonly ComponentManifestEntry[] = manifest.components;
export type ComponentId = ComponentManifestEntry['id'];

export function getComponent(id: ComponentId): ComponentManifestEntry | null {
  return COMPONENTS.find(c => c.id === id) || null;
}

export function getComponentsByCategory(category: string): ComponentManifestEntry[] {
  return COMPONENTS.filter(c => c.meta.category === category);
}

export function getComponentsByStatus(status: string): ComponentManifestEntry[] {
  return COMPONENTS.filter(c => c.meta.status === status);
}

export function searchComponents(query: string): ComponentManifestEntry[] {
  const lowerQuery = query.toLowerCase();
  return COMPONENTS.filter(c => 
    c.meta.name.toLowerCase().includes(lowerQuery) ||
    c.meta.description.toLowerCase().includes(lowerQuery) ||
    c.meta.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export { manifest };
export default COMPONENTS;
`;

	writeFileSync("src/registry.ts", registryContent);
	console.log("📝 Generated registry.ts");
}

/**
 * Generate a clean template file - now simply copy the component file
 * since meta is no longer embedded in the component
 */
async function generateCleanTemplate(
	filePath: string,
	component: ComponentManifestEntry,
): Promise<void> {
	// Simply copy the component file content as-is
	const componentContent = readFileSync(filePath, "utf8");
	const originalFileName = basename(filePath).replace(/\.tsx?$/, ".txt");

	const templatePath = `../../web/public/templates/${originalFileName}`;
	writeFileSync(templatePath, componentContent);

	console.log(`📝 Generated clean template: ${templatePath}`);
}

// Run the generator
generateManifest().catch(console.error);
