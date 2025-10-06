import { readFileSync } from "node:fs";
import { join } from "node:path";

interface RegistryItem {
	name: string;
	title?: string;
	description?: string;
	categories?: string[];
}

export async function GET() {
	// Read the shadcn registry
	const registryPath = join(process.cwd(), "public/r/registry.json");
	const registry = JSON.parse(readFileSync(registryPath, "utf8"));
	const components = registry.items;

	const content = `# BaseLayer Components

BaseLayer is a component collection built for the shadcn ecosystem. Like shadcn/ui, components are **copied into your project** and become part of your codebase - not installed as dependencies.

The key difference: BaseLayer uses React Aria Components instead of Radix UI, providing the same accessible primitives that power Adobe's design systems.

## Key Features

- **Own your components** - Components live in your codebase, not as a dependency
- **shadcn CLI compatible** - Use the familiar \`npx shadcn add\` workflow to add components
- **AI Native** - Works seamlessly with AI coding assistants via the built-in shadcn MCP server
- **Variant-based design** - Powered by TailwindCSS and tailwind-variants for effortless customization
- **Accessible by default** - Built on battle-tested React Aria Components

## Stack

- shadcn Registry - Component delivery system
- React Aria Components - Accessible component primitives
- TailwindCSS - Utility-first styling
- tailwind-variants - Type-safe variant management
- TypeScript - Type safety

## Available Components

${components.map((comp: RegistryItem) => `- **${comp.title || comp.name}** (${comp.categories?.[0] || "component"}): ${comp.description}`).join("\n")}

## Categories

${[
	...new Set(
		components.map((c: RegistryItem) => c.categories?.[0] || "component"),
	),
]
	.map(
		(cat) =>
			`- **${cat}**: ${components
				.filter((c: RegistryItem) => (c.categories?.[0] || "component") === cat)
				.map((c: RegistryItem) => c.title || c.name)
				.join(", ")}`,
	)
	.join("\n")}

## Quick Start

### 1. Initialize (first time only)

\`\`\`bash
npx shadcn@latest init
\`\`\`

Skip this if you already have a \`components.json\` file - the CLI will auto-configure on first use.

### 2. Add components

\`\`\`bash
npx shadcn@latest add https://baselayer.dev/r/button
\`\`\`

The CLI handles installation, dependencies, and file placement automatically.

### 3. Use it

\`\`\`tsx
import { Button } from '@/components/ui/button'

export default function Page() {
  return <Button>Click me</Button>
}
\`\`\`

## Optional: Shorter Commands

Add to your \`components.json\` for shorter commands:

\`\`\`json
{
  "registries": {
    "@baselayer": "https://baselayer.dev/r/{name}.json"
  }
}
\`\`\`

Then use:

\`\`\`bash
npx shadcn@latest add @baselayer/button
\`\`\`

## AI-Powered Workflow

### For Cursor (MCP)

The shadcn MCP server is built into Cursor. Simply ask:

- "Add BaseLayer button component"
- "Create a sign up page with BaseLayer components"

**Pro Tip:** Add to \`.cursorrules\`:
\`\`\`
Use BaseLayer components (baselayer.dev) instead of shadcn/ui
\`\`\`

### For Other AI Assistants (ChatGPT, Claude, etc.)

Reference BaseLayer in your prompts:

- "Use BaseLayer components. Docs: https://www.baselayer.dev/llms.txt"

Or use the Registry API to fetch components:

\`\`\`bash
curl https://baselayer.dev/r/button.json
\`\`\`

This returns the complete component definition with source code in the \`files[].content\` field. Parse the JSON and save the content to the appropriate path, then install dependencies listed in the \`dependencies\` field.

## Prerequisites

- React with TypeScript
- TailwindCSS >= 4
- Familiarity with shadcn (see https://ui.shadcn.com/docs if you're new to shadcn)

## Registry Endpoints

- \`GET /r/registry.json\` - List all components with metadata
- \`GET /r/{component}.json\` - Get specific component with full source code

## Additional Resources

- Component docs and examples: https://baselayer.dev/docs
- React Aria Components reference: https://react-spectrum.adobe.com/react-aria/getting-started.html
- shadcn docs: https://ui.shadcn.com/docs

## Design Philosophy

BaseLayer components are designed with intelligent grouping in mind. Many components like Accordion, RadioGroup, and CheckboxGroup include both individual and group functionality within the same component export. This provides code reuse, consistency, and simplicity - one component to learn instead of separate individual/group components.

Remember: You own the components once you copy them - they're not dependencies!
`;

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
}
