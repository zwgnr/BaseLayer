#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getManifest } from "./tools/get-manifest";
import { getComponentTemplate } from "./tools/get-component-template";
import { initBaselayer } from "./tools/init-baselayer";

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
      "Search and discover BaseLayer components by name, description, tags, category, or status. Use empty query to list all components.",
    inputSchema: {
      query: z
        .string()
        .optional()
        .describe(
          "Search query to match against component names, descriptions, or tags. Leave empty to list all components."
        ),
      componentIds: z
        .array(z.string())
        .optional()
        .describe(
          'Array of specific component IDs to search for (e.g., ["button", "input"]). When provided, returns only these components if they exist.'
        ),
      category: z
        .string()
        .optional()
        .describe('Filter by category (e.g., "Forms", "Layout", "Feedback")'),
      status: z
        .string()
        .optional()
        .describe("Filter by status (alpha, beta, stable, deprecated)"),
    },
  },
  async (args) => {
    try {
      const { query, componentIds, category, status } = args;
      const manifest = await getManifest();

      let components = manifest.components;
      let finalComponentIds = componentIds;

      // Smart query parsing: if query contains multiple words that might be component names,
      // convert to componentIds for better matching
      if (query && query.trim() && !componentIds) {
        const queryWords = query.trim().toLowerCase().split(/\s+/);

        // Check if all words in the query match existing component IDs or display names
        const allComponentIds = manifest.components.map((c: any) =>
          c.id.toLowerCase()
        );
        const allDisplayNames = manifest.components.map((c: any) =>
          c.displayName.toLowerCase()
        );
        const allComponentNames = [...allComponentIds, ...allDisplayNames];

        const matchingWords = queryWords.filter(
          (word) =>
            allComponentNames.includes(word) ||
            allComponentNames.some((name) => name.includes(word))
        );

        // If most words (>= 50%) seem to be component names, treat as componentIds search
        if (
          matchingWords.length >= queryWords.length * 0.5 &&
          queryWords.length > 1
        ) {
          finalComponentIds = queryWords;
          console.error(
            `🔍 Auto-detected component search: converting "${query}" to componentIds: [${queryWords.join(
              ", "
            )}]`
          );
        }
      }

      // Apply specific component IDs filter first (if provided or auto-detected)
      if (finalComponentIds && finalComponentIds.length > 0) {
        const lowerCaseIds = finalComponentIds.map((id) => id.toLowerCase());
        components = components.filter(
          (c: any) =>
            lowerCaseIds.includes(c.id.toLowerCase()) ||
            lowerCaseIds.includes(c.displayName.toLowerCase()) ||
            lowerCaseIds.some(
              (searchId) =>
                c.id.toLowerCase().includes(searchId) ||
                c.displayName.toLowerCase().includes(searchId)
            )
        );
      }

      // Apply other filters
      if (category) {
        components = components.filter(
          (c: any) => c.meta.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (status) {
        components = components.filter((c: any) => c.meta.status === status);
      }

      // Apply search query if provided (only if not using specific component IDs)
      if (query && query.trim() && !finalComponentIds) {
        const lowerQuery = query.toLowerCase();
        components = components.filter(
          (c: any) =>
            c.displayName.toLowerCase().includes(lowerQuery) ||
            c.meta.description.toLowerCase().includes(lowerQuery) ||
            c.meta.category.toLowerCase().includes(lowerQuery) ||
            c.meta.tags.some((tag: string) =>
              tag.toLowerCase().includes(lowerQuery)
            )
        );
      }

      if (components.length === 0) {
        const searchInfo = [];
        if (finalComponentIds && finalComponentIds.length > 0) {
          searchInfo.push(`component IDs: [${finalComponentIds.join(", ")}]`);
        } else if (componentIds && componentIds.length > 0) {
          searchInfo.push(`component IDs: [${componentIds.join(", ")}]`);
        }
        if (query && !finalComponentIds) searchInfo.push(`query: "${query}"`);
        if (category) searchInfo.push(`category: "${category}"`);
        if (status) searchInfo.push(`status: "${status}"`);

        return {
          content: [
            {
              type: "text",
              text: `🔍 No components found ${
                searchInfo.length > 0 ? `matching ${searchInfo.join(", ")}` : ""
              }\n\n💡 Try searching for:\n• Specific component IDs (e.g., ["button", "input"])\n• Component names (e.g., "button", "input")\n• Multiple components in one query (e.g., "button input card")\n• Categories (e.g., "form", "layout")\n• Tags (e.g., "interactive", "accessible")\n• Leave query empty to see all components`,
            },
          ],
        };
      }

      const resultList = components
        .map(
          (c: any) =>
            `• **${c.displayName}** (${c.id})\n  ${
              c.meta.description
            }\n  Category: ${c.meta.category} | Status: ${
              c.meta.status
            }\n  Tags: ${c.meta.tags.join(", ")}`
        )
        .join("\n\n");

      // Build title based on what was searched/filtered
      let title = "BaseLayer Components";
      const filters = [];
      if (finalComponentIds && finalComponentIds.length > 0) {
        filters.push(`Auto-detected IDs: [${finalComponentIds.join(", ")}]`);
      } else if (componentIds && componentIds.length > 0) {
        filters.push(`IDs: [${componentIds.join(", ")}]`);
      }
      if (query && query.trim() && !finalComponentIds)
        filters.push(`Search: "${query}"`);
      if (category) filters.push(`Category: ${category}`);
      if (status) filters.push(`Status: ${status}`);
      if (filters.length > 0) title += ` (${filters.join(", ")})`;

      return {
        content: [
          {
            type: "text",
            text: `📋 **${title}**

${resultList}

**${
              query || category || status || componentIds || finalComponentIds
                ? "Found"
                : "Total"
            }**: ${components.length} component${
              components.length !== 1 ? "s" : ""
            }
**Manifest Version**: ${manifest.version}
**Generated**: ${new Date(manifest.generatedAt).toLocaleString()}

• **Install single component**: \`installComponents componentType="button"\`
• **Install multiple components**: \`installComponents componentTypes=["button", "input"]\``,
          },
        ],
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error(`❌ Search error:`, errorMessage);
      return {
        content: [
          {
            type: "text",
            text: `❌ Failed to search components: ${errorMessage}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Get component for installation
server.registerTool(
  "installComponents",
  {
    title: "Install Components",
    description:
      "Get BaseLayer component code and installation instructions for one or multiple components. Note: BaseLayer should be initialized first using 'initBaselayer'.",
    inputSchema: {
      componentTypes: z
        .array(z.string())
        .optional()
        .describe(
          'Array of component IDs to install (e.g., ["button", "input"])'
        ),
      componentType: z
        .string()
        .optional()
        .describe(
          'Single component ID to install (e.g., "button") - for backwards compatibility'
        ),
      componentName: z
        .string()
        .optional()
        .describe(
          "Custom name for the component (only works with single component installation)"
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
          "Either componentTypes array or componentType is required"
        );
      }

      // Validate that componentName is only used with single component
      if (componentName && componentsToInstall.length > 1) {
        throw new Error(
          "componentName can only be used when installing a single component"
        );
      }

      console.error(
        `🚀 Fetching ${
          componentsToInstall.length
        } component(s): ${componentsToInstall.join(", ")}`
      );

      // Get manifest
      const manifest = await getManifest();

      // Process each component
      const componentResults = [];
      const allDependencies = new Set<string>();

      for (const compType of componentsToInstall) {
        const component = manifest.components.find(
          (c: any) => c.id === compType.toLowerCase()
        );

        if (!component) {
          const availableComponents = manifest.components
            .map((c: any) => c.id)
            .join(", ");
          throw new Error(
            `Component '${compType}' not found. Available components: ${availableComponents}`
          );
        }

        // Use provided name for single component, or default name for batch
        const finalComponentName =
          componentsToInstall.length === 1 && componentName
            ? componentName
            : component.displayName;

        // Get the component template
        const componentCode = await getComponentTemplate(
          component.id,
          finalComponentName
        );

        // Add dependencies to the set
        component.imports.forEach((dep: string) => allDependencies.add(dep));

        componentResults.push({
          component,
          finalComponentName,
          componentCode,
        });

        console.error(
          `✅ Successfully fetched ${component.displayName} component`
        );
      }

      // Create response text
      const isMultiple = componentResults.length > 1;

      if (isMultiple) {
        // Batch installation response
        const componentSections = componentResults
          .map(
            ({ component, finalComponentName, componentCode }) =>
              `## ${component.displayName}

**📂 Category**: ${component.meta.category} | **🔖 Status**: ${
                component.meta.status
              }
**📝 Description**: ${component.meta.description}
**🏷️ Tags**: ${component.meta.tags.join(", ")}

Create \`components/${toKebabCase(finalComponentName)}.tsx\`:
\`\`\`tsx
${componentCode}
\`\`\`

**Usage**:
\`\`\`tsx 
import { ${finalComponentName} } from '@/components/${toKebabCase(
                finalComponentName
              )}';
<${finalComponentName} />
\`\`\``
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
                component.displayName
              } component**

**📦 Component**: ${finalComponentName}
**📂 Category**: ${component.meta.category}
**🔖 Status**: ${component.meta.status}
**📝 Description**: ${component.meta.description}
**🔗 Dependencies**: ${component.imports.join(", ")}
**🏷️  Tags**: ${component.meta.tags.join(", ")}

**📋 Installation Steps**:
1. Create a \`components\` directory if it doesn't exist
2. Save the component code below as \`components/${toKebabCase(
                finalComponentName
              )}.tsx\`

\`\`\`tsx
${componentCode}
\`\`\`

**💻 Usage Example**:
\`\`\`tsx
import { ${finalComponentName} } from '@/components/${toKebabCase(
                finalComponentName
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
  }
);

// Initialize BaseLayer in a project
server.registerTool(
  "setupBaseLayer",
  {
    title: "Setup BaseLayer",
    description: "This sets up BaseLayer for the first time in a project.",
    inputSchema: {},
  },
  async () => {
    try {
      console.error("🚀 Fetching BaseLayer setup information...");

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
• Use design tokens: \`color: var(--primary)\`
• Import components: \`import { Button } from '@/components/Button'\`
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
  }
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
