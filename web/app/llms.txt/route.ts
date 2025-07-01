import { COMPONENTS as components } from "@baselayer/components";

export async function GET() {
	const content = `# BaseLayer Components v2.0

BaseLayer is a modern React component registry for the AI era. Built with React Aria Components, TailwindCSS, and tailwind-variants.

## Important: BaseLayer is NOT an npm package

BaseLayer is a component registry, not a package dependency. You don't install BaseLayer itself - instead, you fetch individual component source code and copy it into your project.

## Available Components

${components.map((comp) => `- **${comp.meta.name}** (${comp.meta.category}): ${comp.meta.description}`).join("\n")}

## Categories

${[...new Set(components.map((c) => c.meta.category))]
	.map(
		(cat) =>
			`- **${cat}**: ${components
				.filter((c) => c.meta.category === cat)
				.map((c) => c.meta.name)
				.join(", ")}`,
	)
	.join("\n")}

## How to Use BaseLayer Components

### For AI Assistants: Use the Static Files

To get component source code, make HTTP requests to these static endpoints:

**Get component source code:**
\`\`\`bash
curl https://baselayer.dev/templates/button.txt
\`\`\`

**Get Tailwind CSS setup:**
\`\`\`bash  
curl https://baselayer.dev/tailwind.css
\`\`\`

**List all components:**
\`\`\`bash
curl https://baselayer.dev/registry.json
\`\`\`

**Search components:**
\`\`\`bash
curl https://baselayer.dev/.well-known/baselayer
\`\`\`

### For Users: MCP Server Available

BaseLayer also provides an MCP server for editor integration. Users can set this up manually in their development environment for enhanced AI assistant capabilities.
## Example Workflow for AI Assistants

1. **Get component code**:
   \`\`\`bash
   curl https://baselayer.dev/templates/button.txt
   \`\`\`
   This returns the actual React component source code.

2. **Get CSS setup**:
   \`\`\`bash
   curl https://baselayer.dev/tailwind.css
   \`\`\`
   This returns the CSS variables and styles needed.

3. **Save to user's project**:
   Save the returned code to \`components/base/button.tsx\` (or similar path).
   Add the CSS to your global CSS file.

4. **Install dependencies** (if needed):
   \`\`\`bash
   npm install react-aria-components tailwind-variants
   \`\`\`

## Component Architecture

- **Framework**: Next.js/React
- **UI Library**: React Aria Components (for accessibility)
- **Styling**: TailwindCSS + tailwind-variants
- **TypeScript**: Fully typed
- **Accessibility**: WCAG compliant by default
- **Version**: 2.0.0

## Available Static Endpoints

- \`GET /registry.json\` - List all components with metadata
- \`GET /templates/{id}.txt\` - Get component source code
- \`GET /tailwind.css\` - Get CSS setup
- \`GET /.well-known/baselayer\` - Complete API specification

Remember: You own the components once you copy them - they're not dependencies!

For complete documentation and component examples, visit https://baselayer.dev/docs
For detailed prop and usage information, refer to the React Aria Components docs: https://react-spectrum.adobe.com/react-aria/getting-started.html
`;

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
}
