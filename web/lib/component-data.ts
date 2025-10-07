import { readFileSync } from "node:fs";
import { join } from "node:path";

const examplesDir = join(process.cwd(), "../packages/components/src/examples");

export async function getComponentSource(name: string): Promise<string> {
	try {
		const componentPath = join(process.cwd(), `public/r/${name}.json`);
		const componentContent = readFileSync(componentPath, "utf8");
		const component = JSON.parse(componentContent);

		if (component?.files?.[0]?.content) {
			return component.files[0].content;
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
			'from "@/components/ui/$1"',
		);

		return content;
	} catch (error) {
		console.error(`Error loading example ${name}:`, error);
		return `// Error loading example: ${
			error instanceof Error ? error.message : "Unknown error"
		}`;
	}
}
