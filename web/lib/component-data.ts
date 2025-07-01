import {
	type ComponentId,
	getComponentTemplate,
	registry,
} from "@baselayer/components";
import type {
	ComponentRegistry,
	ComponentRegistryEntry,
} from "@baselayer/registry";

import { readFileSync } from "node:fs";
import { join } from "node:path";

const examplesDir = join(process.cwd(), "../packages/components/src/examples");

export async function getRegistry(): Promise<ComponentRegistry> {
	return registry;
}

export async function getComponentSource(name: string): Promise<string> {
	try {
		const component = registry.components.find(
			(comp: ComponentRegistryEntry) =>
				comp.id.toLowerCase() === name.toLowerCase() ||
				comp.meta.name.toLowerCase() === name.toLowerCase(),
		);

		if (!component) {
			return `// Component '${name}' not found in registry`;
		}

		const templateContent = getComponentTemplate(component.id as ComponentId);

		if (!templateContent) {
			return `// Template content not found for component '${component.id}'`;
		}

		return templateContent;
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
