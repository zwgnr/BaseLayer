import { readFileSync } from "node:fs";
import { join } from "node:path";

const examplesDir = join(process.cwd(), "../packages/components/src/examples");
const componentsSourceDir = join(process.cwd(), "../packages/components/src/core");

export async function getComponentSource(name: string): Promise<string> {
	try {
		const sourceFilePath = join(componentsSourceDir, name, `${name}.tsx`);
		return readFileSync(sourceFilePath, "utf8");
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
