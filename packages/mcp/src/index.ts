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
				content: [{
					type: "text",
					text: `Here are all BaseLayer components:\n\n${JSON.stringify(manifest, null, 2)}\n\nSearch through these components based on the user's request: ${JSON.stringify(args)}`
				}]
			};
		} catch (error) {
			return {
				content: [{
					type: "text",
					text: `❌ Failed to get components: ${error instanceof Error ? error.message : String(error)}`
				}],
				isError: true
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
			componentTypes: z
				.array(z.string())
				.optional()
				.describe(
					'Array of component IDs to install (e.g., ["button", "input"])',
				),
			componentType: z
				.string()
				.optional()
				.describe(
					'Single component ID to install (e.g., "button") - for backwards compatibility',
				),
			componentName: z
				.string()
				.optional()
				.describe(
					"Custom name for the component (only works with single component installation)",
				),
		},
	},
	async (args) => {
		const { componentTypes, componentType, componentName } = args;

		try {
			// Determine which components to install
			let componentsToInstall: string[] = [];

			if (componentTypes && componentTypes.length > 0) {
				componentsToInstall = componentTypes;
			} else if (componentType) {
				componentsToInstall = [componentType];
			} else {
				throw new Error(
					"Either componentTypes array or componentType is required",
				);
			}

			// Validate that componentName is only used with single component
			if (componentName && componentsToInstall.length > 1) {
				throw new Error(
					"componentName can only be used when installing a single component",
				);
			}

			console.error(
				`🚀 Fetching ${
					componentsToInstall.length
				} component(s): ${componentsToInstall.join(", ")}`,
			);

			// Get manifest
			const manifest = await getManifest();

			// Process each component
			const componentResults = [];

			for (const compType of componentsToInstall) {
				const component = manifest.components.find(
					(c: ComponentManifestEntry) => c.id === compType.toLowerCase(),
				);

				if (!component) {
					const availableComponents = manifest.components
						.filter((c: ComponentManifestEntry) => c?.id)
						.map((c: ComponentManifestEntry) => c.id)
						.join(", ");
					throw new Error(
						`Component '${compType}' not found. Available components: ${availableComponents}`,
					);
				}

				// Use provided name for single component, or default name for batch
				const finalComponentName =
					componentsToInstall.length === 1 && componentName
						? componentName
						: component?.meta?.name || component?.id || "Component";

				// Get the component template
				const componentCode = await getComponentTemplate(
					component.id,
					finalComponentName,
				);

				// Note: Dependencies would be tracked here if available in manifest
				// For now, BaseLayer components are self-contained

				componentResults.push({
					component,
					finalComponentName,
					componentCode,
				});

				console.error(
					`✅ Successfully fetched ${component?.meta?.name || component?.id || "component"}`,
				);
			}

			// Create response text
			const isMultiple = componentResults.length > 1;

			if (isMultiple) {
				// Batch installation response
				const componentSections = componentResults
					.map(
						({ component, finalComponentName, componentCode }) =>
							`## ${component?.meta?.name || component?.id || "Component"}

**📂 Category**: ${component?.meta?.category || "Unknown"} | **🔖 Status**: ${
								component?.meta?.status || "Unknown"
							}
**📝 Description**: ${component?.meta?.description || "No description"}
**🏷️ Tags**: ${Array.isArray(component?.meta?.tags) ? component.meta.tags.join(", ") : "None"}

Create \`components/base/${toKebabCase(finalComponentName)}.tsx\`:
\`\`\`tsx
${componentCode}
\`\`\`

**Usage**:
\`\`\`tsx 
import { ${finalComponentName} } from '@/components/base/${toKebabCase(
								finalComponentName,
							)}';
<${finalComponentName} />
\`\`\``,
					)
					.join("\n\n---\n\n");

				return {
					content: [
						{
							type: "text",
							text: `✅ **Successfully fetched ${componentResults.length} components**

**📋 Installation Steps**:
1. Create each component file as shown below

${componentSections}

🌐 **Templates fetched from BaseLayer API** (v${manifest.version})`,
						},
					],
				};
			} else {
				// Single component response (preserve existing format)
				const { component, finalComponentName, componentCode } =
					componentResults[0];

				return {
					content: [
						{
							type: "text",
							text: `✅ **Successfully fetched ${
								component?.meta?.name || component?.id || "component"
							} component**

**📦 Component**: ${finalComponentName}
**📂 Category**: ${component?.meta?.category || "Unknown"}
**🔖 Status**: ${component?.meta?.status || "Unknown"}
**📝 Description**: ${component?.meta?.description || "No description"}
**🏷️  Tags**: ${Array.isArray(component?.meta?.tags) ? component.meta.tags.join(", ") : "None"}

**📋 Installation Steps**:
1. Create a \`components/base\` directory if it doesn't exist
2. Save the component code below as \`components/base/${toKebabCase(
								finalComponentName,
							)}.tsx\`

\`\`\`tsx
${componentCode}
\`\`\`

**💻 Usage Example**:
\`\`\`tsx
import { ${finalComponentName} } from '@/components/base/${toKebabCase(
								finalComponentName,
							)}';

// Basic usage
<${finalComponentName} />
\`\`\`

🌐 **Template fetched from BaseLayer API** (v${manifest.version})`,
						},
					],
				};
			}
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			console.error(`❌ Failed to fetch components:`, errorMessage);

			return {
				content: [
					{
						type: "text",
						text: `❌ **Failed to fetch components**: ${errorMessage}

💡 **Troubleshooting**:
• Make sure the BaseLayer API is running at ${
							process.env.BASELAYER_API_URL || "http://localhost:3000"
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
		description: "This sets up BaseLayer for the first time in a project. If a .baselayer file exists, baselayer is already initialized.",
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
						text: `🎉 **BaseLayer Setup Instructions**

${result.instructions}

**📦 Dependencies to install:**
\`\`\`bash
# Using pnpm (recommended)
pnpm add ${result.dependencies.join(" ")}

# Or using npm
npm install ${result.dependencies.join(" ")}

# Or using yarn  
yarn add ${result.dependencies.join(" ")}
\`\`\`

**🎨 BaseLayer CSS to add:**
\`\`\`css
${result.tailwindCss}
\`\`\`

💡 **After setup, you can:**
• Import components: \`import { Button } from '@/components/base/Button'\`
• Install components: \`installComponents componentType="button"\` or \`installComponents componentTypes=["button", "input"]\``,
					},
				],
			};
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			console.error(`❌ BaseLayer setup failed:`, errorMessage);

			return {
				content: [
					{
						type: "text",
						text: `❌ **Failed to fetch BaseLayer setup**: ${errorMessage}

💡 **Troubleshooting**:
• Ensure the BaseLayer API is running at ${
							process.env.BASELAYER_API_URL || "http://localhost:3000"
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

// Start receiving messages on stdin and sending messages on stdout
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
