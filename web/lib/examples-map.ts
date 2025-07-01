// Filesystem-based examples map using dynamic discovery

import type { ComponentType } from "react";

import { readFileSync } from "node:fs";
import { join } from "node:path";

const examplesDir = join(process.cwd(), "../packages/components/src/examples");

export async function getExampleComponent(exampleId: string) {
	try {
		// Read the example file to extract the export name
		const exampleFilePath = join(examplesDir, `${exampleId}.tsx`);
		const fileContent = readFileSync(exampleFilePath, "utf8");

		// Extract the export name using regex
		// Matches: export const ComponentName = ...
		const exportMatch = fileContent.match(/export\s+const\s+(\w+)\s*=/);

		if (!exportMatch) {
			console.error(`Could not find export in ${exampleId}.tsx`);
			return null;
		}

		const componentName = exportMatch[1];

		// Dynamically import the component from the built package
		const module = await import("@baselayer/components");
		const Component = (module as unknown as Record<string, ComponentType>)[
			componentName
		];

		if (!Component) {
			console.error(
				`Component ${componentName} not found in @baselayer/components`,
			);
			return null;
		}

		return Component as React.ComponentType;
	} catch (error) {
		console.error(`Failed to load example component ${exampleId}:`, error);
		return null;
	}
}
