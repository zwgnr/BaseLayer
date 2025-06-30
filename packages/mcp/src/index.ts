#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import type { ComponentManifestEntry } from "../../components/src/schema";
import { getComponentTemplate } from "./tools/get-component-template.js";
import { getManifest } from "./tools/get-manifest.js";
import { initBaselayer } from "./tools/init-baselayer.js";

// Helper function to convert PascalCase/camelCase to kebab-case
function toKebabCase(str: string): string {
	return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

const server = new McpServer({
	name: "baselayer-mcp-server",
	version: "2.0.0",
});

server.registerTool(
	"searchComponents",
	{
		title: "Search Components",
		description:
			"Search and discover BaseLayer components by name, description, tags, category, or status.",
		inputSchema: {},
	},
	async (args) => {
		try {
			const manifest = await getManifest();

			return {
				content: [
					{
						type: "text",
						text: `Here are all BaseLayer components:\n\n${JSON.stringify(manifest, null, 2)}\n\nSearch through these components based on the user's request: ${JSON.stringify(args)}`,
					},
				],
			};
		} catch (error) {
			return {
				content: [
					{
						type: "text",
						text: `Failed to get components: ${error instanceof Error ? error.message : String(error)}`,
					},
				],
				isError: true,
			};
		}
	},
);

// Get component for installation
server.registerTool(
	"installComponents",
	{
		title: "Install Components",
		description:
			"Get BaseLayer component code and installation instructions for one or multiple components.",
		inputSchema: {
			componentNames: z
				.array(z.string())
				.describe(
					'Array of component IDs to install (e.g., ["button", "input"])',
				),
		},
	},
	async (args) => {
		const { componentNames } = args;

		try {
			if (!componentNames || componentNames.length === 0) {
				throw new Error("Please provide at least one component name");
			}

			const manifest = await getManifest();

			// First, validate all components exist and collect metadata
			const componentsToFetch = [];
			for (const componentId of componentNames) {
				const component = manifest.components.find(
					(c: ComponentManifestEntry) => c.id === componentId.toLowerCase(),
				);

				if (!component) {
					const availableComponents = manifest.components
						.filter((c: ComponentManifestEntry) => c?.id)
						.map((c: ComponentManifestEntry) => c.id)
						.join(", ");
					throw new Error(
						`Component '${componentId}' not found. Available components: ${availableComponents}`,
					);
				}

				const name = component?.meta?.name || component?.id;
				componentsToFetch.push({ component, name });
			}

			// Fetch all component templates in parallel
			const componentCodes = await Promise.all(
				componentsToFetch.map(({ component }) =>
					getComponentTemplate(component.id),
				),
			);

			// Combine results
			const componentResults = componentsToFetch.map((comp, index) => ({
				...comp,
				componentCode: componentCodes[index],
			}));

			const componentSections = componentResults
				.map(
					({ name, componentCode }) =>
						`## ${name}

Create \`components/base/${toKebabCase(name)}.tsx\`:
\`\`\`tsx
${componentCode}
\`\`\`

**Usage**:
- be sure to import the component from the correct path with the @/ prefix:
\`\`\`tsx 
import { ${name} } from '@/components/base/${toKebabCase(name)}';
<${name} />
\`\`\``,
				)
				.join("\n\n---\n\n");

			return {
				content: [
					{
						type: "text",
						text: `Successfully fetched ${componentResults.length} component${componentResults.length > 1 ? "s" : ""}

Installation Steps:
1. Create each component file as shown below

${componentSections}`,
					},
				],
			};
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			console.error(`Failed to fetch components:`, errorMessage);

			return {
				content: [
					{
						type: "text",
						text: `Failed to fetch components: ${errorMessage}

Troubleshooting:
• Make sure you can access BaseLayer at https://baselayer.dev
						}
• Check that the component IDs are correct (use \`searchComponents\`)`,
					},
				],
				isError: true,
			};
		}
	},
);

// Initialize BaseLayer in a project
server.registerTool(
	"setupBaseLayer",
	{
		title: "Setup BaseLayer",
		description:
			"Initialises Baselayer in this repo. **Call this tool *only* if the *user explicitly requests setup*",
		inputSchema: {},
	},
	async () => {
		try {
			const result = await initBaselayer();

			if (!result.success) {
				return {
					content: [
						{
							type: "text",
							text: result.instructions,
						},
					],
					isError: true,
				};
			}

			return {
				content: [
					{
						type: "text",
						text: result.instructions,
					},
				],
			};
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			console.error(`BaseLayer setup failed:`, errorMessage);

			return {
				content: [
					{
						type: "text",
						text: `Failed to fetch BaseLayer setup: ${errorMessage}

Troubleshooting:
• Ensure you can access BaseLayer at https://baselayer.dev
						}
• Check your internet connection
• Try again in a few moments`,
					},
				],
				isError: true,
			};
		}
	},
);

process.on("SIGINT", async () => {
	await server.close();
	process.exit(0);
});

async function main() {
	try {
		const transport = new StdioServerTransport();
		await server.connect(transport);
		console.error("BaseLayer MCP server running on stdio");
	} catch (error) {
		console.error("Failed to start MCP server:", error);
		process.exit(1);
	}
}

main().catch(console.error);
