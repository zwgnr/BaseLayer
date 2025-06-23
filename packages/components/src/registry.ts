// Auto-generated registry from manifest
// Do not edit manually - regenerate with 'pnpm build'

import type { ComponentManifest, ComponentManifestEntry } from './schema';

const manifest: ComponentManifest = {
  "generatedAt": "2025-06-23T21:51:06.243Z",
  "version": "2.0.0",
  "components": [
    {
      "id": "button",
      "displayName": "Button",
      "path": "src/button/button.tsx",
      "template": "/api/templates/button.tsx",
      "imports": [
        "react-aria-components",
        "tailwind-variants"
      ],
      "meta": {
        "category": "forms",
        "status": "stable",
        "description": "A button allows a user to perform an action, with mouse, touch, and keyboard interactions.",
        "tags": [
          "form",
          "interactive"
        ],
        "version": "2.0.0"
      },
      "sha256": "bbc30c844373c1824b18fa146f7b0cb0aa221fc631df7bf7413f65b6403997b6"
    },
    {
      "id": "input",
      "displayName": "Input",
      "path": "src/input/input.tsx",
      "template": "/api/templates/input.tsx",
      "imports": [
        "react-aria-components"
      ],
      "meta": {
        "category": "forms",
        "status": "stable",
        "description": "Allows a user to enter a plain text value with a keyboard.",
        "tags": [
          "form",
          "interactive"
        ],
        "version": "2.0.0"
      },
      "sha256": "6940c8a24b62656728b397402804b2611c5e7498e280b31710e6bb65ded7c9a8"
    }
  ]
};

export const COMPONENTS: readonly ComponentManifestEntry[] = manifest.components;
export type ComponentId = ComponentManifestEntry['id'];

export function getComponent(id: ComponentId): ComponentManifestEntry | null {
  return COMPONENTS.find(c => c.id === id) || null;
}

export function getComponentsByCategory(category: string): ComponentManifestEntry[] {
  return COMPONENTS.filter(c => c.meta.category === category);
}

export function getComponentsByStatus(status: string): ComponentManifestEntry[] {
  return COMPONENTS.filter(c => c.meta.status === status);
}

export function searchComponents(query: string): ComponentManifestEntry[] {
  const lowerQuery = query.toLowerCase();
  return COMPONENTS.filter(c => 
    c.displayName.toLowerCase().includes(lowerQuery) ||
    c.meta.description.toLowerCase().includes(lowerQuery) ||
    c.meta.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export { manifest };
export default COMPONENTS;
