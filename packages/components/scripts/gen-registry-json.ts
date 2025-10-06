/** biome-ignore-all lint/suspicious/noAssignInExpressions: skip */
import type { Registry, RegistryItem } from "@baselayer/registry";
import glob from "fast-glob";

import { existsSync, readFileSync, writeFileSync } from "node:fs";

const COMPONENTS_DIR = "src/core";
const OUTPUT_FILE = "registry.json";

async function generateRegistryJson() {
	console.log("Discovering components...");

	// Find all component directories with meta.json files
	const metaFiles = await glob(`${COMPONENTS_DIR}/*/meta.json`);

	console.log(`Found ${metaFiles.length} components`);

	const registryItems: RegistryItem[] = [];

	for (const metaFilePath of metaFiles) {
		try {
			const component = await processComponent(metaFilePath);
			if (component) {
				registryItems.push(component);
				console.log(`Processed ${component.name}`);
			}
		} catch (error) {
			console.error(`Failed to process ${metaFilePath}:`, error);
		}
	}

	// Sort components by name for consistent output
	registryItems.sort((a, b) => a.name.localeCompare(b.name));

	const registry: Registry = {
		name: "@baselayer",
		$schema: "https://ui.shadcn.com/schema/registry.json",
		homepage: "https://baselayer.dev",
		items: registryItems,
	};

	const jsonContent = JSON.stringify(registry, null, 2);
	writeFileSync(OUTPUT_FILE, jsonContent);
	console.log(
		`Generated registry.json with ${registryItems.length} components`,
	);
	console.log(`\nNext step: Run 'pnpm registry:build' to generate final files`);
}

async function processComponent(
	metaFilePath: string,
): Promise<RegistryItem | null> {
	// Extract component id from path (e.g., src/core/button/meta.json -> button)
	const componentId = metaFilePath.split("/").slice(-2, -1)[0];

	// Read component metadata
	const metaContent = readFileSync(metaFilePath, "utf8");
	const meta = JSON.parse(metaContent);

	// Read component source file
	const sourceFile = `${COMPONENTS_DIR}/${componentId}/${componentId}.tsx`;
	if (!existsSync(sourceFile)) {
		console.warn(`Source file not found: ${sourceFile}`);
		return null;
	}

	const sourceContent = readFileSync(sourceFile, "utf8");

	// Detect registry dependencies (imports from other components in registry)
	const registryDependencies: string[] = [];
	// Match both relative imports and alias imports
	const relativeImportRegex = /from\s+["']\.\.\/([^/"']+)\/\1["']/g;
	const aliasImportRegex = /from\s+["']@\/components\/ui\/([^/"']+)\/\1["']/g;
	
	let match: RegExpExecArray | null;

	// Check relative imports
	while ((match = relativeImportRegex.exec(sourceContent)) !== null) {
		const depComponentId = match[1];
		if (depComponentId !== componentId) {
			registryDependencies.push(depComponentId);
		}
	}
	
	// Check alias imports
	while ((match = aliasImportRegex.exec(sourceContent)) !== null) {
		const depComponentId = match[1];
		if (depComponentId !== componentId) {
			registryDependencies.push(depComponentId);
		}
	}

	return {
		name: componentId,
		type: "registry:ui",
		title: meta.name,
		description: meta.description,
		author: "BaseLayer",
		categories: [meta.category],
		files: [
			{
				path: `src/core/${componentId}/${componentId}.tsx`,
				target: `components/ui/${componentId}.tsx`,
				type: "registry:component",
			},
		],
		// Add registry dependencies (other components this depends on in registry)
		...(registryDependencies.length > 0 && { registryDependencies }),
		// Add dependencies
		dependencies: [
			"react-aria-components",
			"tailwind-variants",
			"lucide-react",
			"tw-animate-css",
		],
		tailwind: {
			config: {
				content: ["./components/**/*.{ts,tsx}"],
				theme: {
					extend: {},
				},
			},
		},
		// CSS variables
		cssVars: {
			theme: {
				"--color-surface": "var(--surface)",
				"--color-surface-2": "var(--surface-2)",
				"--color-fg": "var(--fg)",
				"--color-fg-muted": "var(--fg-muted)",
				"--color-fg-disabled": "var(--fg-disabled)",
				"--color-fg-inverse": "var(--fg-inverse)",
				"--color-border": "var(--border)",
				"--color-focus": "var(--focus)",
				"--color-primary": "var(--primary)",
				"--color-primary-fg": "var(--primary-fg)",
				"--color-secondary": "var(--secondary)",
				"--color-secondary-fg": "var(--secondary-fg)",
				"--color-danger": "var(--danger)",
				"--color-danger-fg": "var(--danger-fg)",
			},
			light: {
				"--surface": "oklch(98.5% 0 0)",
				"--surface-2": "oklch(97% 0 0)",
				"--fg": "oklch(14.5% 0 0)",
				"--fg-muted": "oklch(55.6% 0 0)",
				"--fg-inverse": "oklch(98.5% 0 0)",
				"--fg-disabled": "oklch(70.8% 0 0)",
				"--border": "oklch(87% 0 0)",
				"--focus": "oklch(68.5% 0.169 237.323)",
				"--primary": "oklch(14.5% 0 0)",
				"--primary-fg": "oklch(98.5% 0 0)",
				"--secondary": "oklch(92.2% 0 0)",
				"--secondary-fg": "oklch(14.5% 0 0)",
				"--danger": "oklch(63.7% 0.237 25.331)",
				"--danger-fg": "#ffffff",
			},
			dark: {
				"--surface": "oklch(14.5% 0 0)",
				"--surface-2": "oklch(20.5% 0 0)",
				"--fg": "oklch(98.5% 0.001 106.423)",
				"--fg-muted": "oklch(55.6% 0 0)",
				"--fg-inverse": "oklch(98.5% 0 0)",
				"--fg-disabled": "oklch(37.1% 0 0)",
				"--border": "oklch(37.1% 0 0)",
				"--focus": "oklch(68.5% 0.169 237.323)",
				"--primary": "oklch(98.5% 0 0)",
				"--primary-fg": "oklch(14.5% 0 0)",
				"--secondary": "oklch(26.9% 0 0)",
				"--secondary-fg": "oklch(98.5% 0 0)",
				"--danger": "oklch(63.7% 0.237 25.331)",
				"--danger-fg": "oklch(98.5% 0 0)",
			},
		},
		// CSS imports and custom CSS
		css: {
			"@import \"tw-animate-css\"": {},
		},
		meta: {
			status: meta.status,
			tags: meta.tags,
		},
	};
}

generateRegistryJson().catch(console.error);
