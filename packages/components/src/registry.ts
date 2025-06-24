// Auto-generated registry from manifest
// Do not edit manually - regenerate with 'pnpm build'

import type { ComponentManifest, ComponentManifestEntry } from './schema';

const manifest: ComponentManifest = {
  "generatedAt": "2025-06-24T04:13:39.743Z",
  "version": "2.0.0",
  "components": [
    {
      "id": "badge",
      "displayName": "Badge",
      "path": "src/badge/badge.tsx",
      "template": "/api/templates/badge.tsx",
      "imports": [
        "react",
        "tailwind-variants"
      ],
      "meta": {
        "category": "display",
        "status": "stable",
        "description": "A badge is a small label that can be used to display information or status.",
        "tags": [
          "status"
        ],
        "version": "2.0.0"
      },
      "sha256": "591d9e9e098bf8f204f2c8979bd7460c57ee107685d53210849412eedc2e055e"
    },
    {
      "id": "combo-box",
      "displayName": "ComboBox",
      "path": "src/combobox/combobox.tsx",
      "template": "/api/templates/combo-box.tsx",
      "imports": [
        "react",
        "react-aria-components",
        "tailwind-variants",
        "lucide-react"
      ],
      "meta": {
        "category": "forms",
        "status": "stable",
        "description": "A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.",
        "tags": [
          "form",
          "interactive"
        ],
        "version": "2.0.0"
      },
      "sha256": "024518df947ddb6246d0396fed0944288f878632973fc69f58207c1f2b24e9a9"
    },
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
      "sha256": "d2f05daf4ade8438e08e71607a0ba776c84c1ff04973ee5ec0d11fd37a72f290"
    },
    {
      "id": "input",
      "displayName": "Input",
      "path": "src/input/input.tsx",
      "template": "/api/templates/input.tsx",
      "imports": [
        "react-aria-components",
        "tailwind-variants"
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
      "sha256": "5cc9bd964a54174e97ae4b2c42225b26d931baa056ae0df0ed59eaa4d0b83538"
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
