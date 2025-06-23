import { COMPONENTS as components } from '@baselayer/components';

export async function GET() {
  const content = `# BaseLayer Components

BaseLayer is a component system for the AI era. Built with React Aria Components and TailwindCSS.

## Available Components

${components.map(comp => `- ${comp.displayName}: ${comp.meta.description}`).join('\n')}

## Categories

${[...new Set(components.map(c => c.meta.category))].map(cat =>
  `- ${cat}: ${components.filter(c => c.meta.category === cat).map(c => c.displayName).join(', ')}`
).join('\n')}

## Usage

Use the BaseLayer VSCode extension to add components to your project:

\`\`\`bash
# Open Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
BaseLayer: init
BaseLayer: add button
\`\`\`

Each component is:
- Accessible by default (React Aria Components)
- Fully customizable
- Theme-aware
- TypeScript ready

For more information, visit https://baselayer.dev
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 