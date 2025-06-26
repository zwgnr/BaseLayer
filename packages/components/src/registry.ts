// Auto-generated registry from manifest
// Do not edit manually - regenerate with 'pnpm build'

import type { ComponentManifest, ComponentManifestEntry } from './schema';

const manifest: ComponentManifest = {
  "generatedAt": "2025-06-26T22:31:52.953Z",
  "version": "2.0.0",
  "components": [
    {
      "id": "button",
      "path": "src/core/button/button.tsx",
      "template": "/templates/button.txt",
      "meta": {
        "name": "button",
        "category": "forms",
        "status": "stable",
        "description": "A button allows a user to perform an action, with mouse, touch, and keyboard interactions.",
        "tags": [
          "form",
          "interactive"
        ],
        "version": "2.0.0"
      },
      "sha256": "3cf31315de60ca11bbb8b2b152080d8665ebc901d1dfc2647f7ececc7714c44e"
    },
    {
      "id": "combobox",
      "path": "src/core/combobox/combobox.tsx",
      "template": "/templates/combobox.txt",
      "meta": {
        "name": "combobox",
        "category": "forms",
        "status": "stable",
        "description": "A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.",
        "tags": [
          "form",
          "interactive",
          "picker"
        ],
        "version": "2.0.0"
      },
      "sha256": "066ccde400c475e86b7f2a6c40e8555100ece83d357f5153c08af4ed810fd5a4"
    },
    {
      "id": "badge",
      "path": "src/core/badge/badge.tsx",
      "template": "/templates/badge.txt",
      "meta": {
        "name": "badge",
        "category": "display",
        "status": "stable",
        "description": "A badge is a small label that can be used to display information or status.",
        "tags": [
          "status"
        ],
        "version": "2.0.0"
      },
      "sha256": "09078332ca0cce55061988ce813a2982fbcb3b96d904435bb3946f5ff0517e99"
    },
    {
      "id": "breadcrumbs",
      "path": "src/core/breadcrumbs/breadcrumbs.tsx",
      "template": "/templates/breadcrumbs.txt",
      "meta": {
        "name": "breadcrumbs",
        "category": "navigation",
        "status": "stable",
        "description": "Breadcrumbs display a heirarchy of links to the current page or resource in an application.",
        "tags": [
          "navigation"
        ],
        "version": "2.0.0"
      },
      "sha256": "67741066cd913ade20b36efa6f9d656c94178604bc42cb43d892c809416dc696"
    },
    {
      "id": "input",
      "path": "src/core/input/input.tsx",
      "template": "/templates/input.txt",
      "meta": {
        "name": "input",
        "category": "forms",
        "status": "stable",
        "description": "Allows a user to enter a plain text value with a keyboard.",
        "tags": [
          "form",
          "interactive"
        ],
        "version": "2.0.0"
      },
      "sha256": "57d324d4e00e34d7996a383532045163bc423c5ca534fbf62762707efbf09bac"
    },
    {
      "id": "calendar",
      "path": "src/core/calendar/calendar.tsx",
      "template": "/templates/calendar.txt",
      "meta": {
        "name": "calendar",
        "category": "data-entry",
        "status": "stable",
        "description": "A calendar displays one or more date grids and allows users to select a single date.",
        "tags": [
          "data-entry",
          "interactive"
        ],
        "version": "2.0.0"
      },
      "sha256": "caae7a66c1e9c0582b5dfea1b5d40bb51e3acbe4e587d7fa63424bba8146c740"
    },
    {
      "id": "select",
      "path": "src/core/select/select.tsx",
      "template": "/templates/select.txt",
      "meta": {
        "name": "select",
        "category": "forms",
        "status": "stable",
        "description": "A select displays a collapsible list of options and allows a user to select one of them.",
        "tags": [
          "form",
          "interactive",
          "picker"
        ],
        "version": "2.0.0"
      },
      "sha256": "2e02cc25b87bebbe90f6bb42a1cce152942310963112a42570136e52c49ca6b0"
    },
    {
      "id": "modal",
      "path": "src/core/modal/modal.tsx",
      "template": "/templates/modal.txt",
      "meta": {
        "name": "modal",
        "category": "overlays",
        "status": "stable",
        "description": "A modal is an overlay element which blocks interaction with elements outside it.",
        "tags": [
          "overlay"
        ],
        "version": "2.0.0"
      },
      "sha256": "ac3e88e0339bbc3d1c4ac1119f2572f6f592f1737c3c2c01dfcc5acc17fc5ea0"
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
    c.meta.name.toLowerCase().includes(lowerQuery) ||
    c.meta.description.toLowerCase().includes(lowerQuery) ||
    c.meta.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export { manifest };
export default COMPONENTS;
