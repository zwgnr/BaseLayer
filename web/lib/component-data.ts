import type { RegistryItem } from "@baselayer/registry";

import { readFileSync } from "node:fs";
import { join } from "node:path";

const examplesDir = join(process.cwd(), "../packages/components/src/examples");

export async function getComponentSource(name: string): Promise<string> {
	try {
		// Read the shadcn registry
		const shadcnRegistryPath = join(process.cwd(), "public/r/index.json");
		const shadcnRegistryContent = readFileSync(shadcnRegistryPath, "utf8");
		const shadcnRegistry = JSON.parse(shadcnRegistryContent);

		// Find the component in the shadcn registry
		const shadcnComponent = shadcnRegistry.items?.find(
			(item: RegistryItem) => item.name === name
		);

		if (shadcnComponent?.files?.[0]?.content) {
			return shadcnComponent.files[0].content;
		}

		return `// Component '${name}' not found in registry`;
	} catch (error) {
		console.error(`Error loading component ${name}:`, error);
		return `// Error loading component: ${
			error instanceof Error ? error.message : "Unknown error"
		}`;
	}
}

export async function getExampleSource(name: string): Promise<string> {
	try {
		// Read the example file directly from the filesystem
		const exampleFilePath = join(examplesDir, `${name}.tsx`);
		let content = readFileSync(exampleFilePath, "utf8");

		// Transform the import path for display 
		content = content.replace(
			/from ["']\.\.\/core\/([^/]+)\/\1["']/g,
			'from "@components/base/$1"',
		);

		return content;
	} catch (error) {
		console.error(`Error loading example ${name}:`, error);
		return `// Error loading example: ${
			error instanceof Error ? error.message : "Unknown error"
		}`;
	}
}
