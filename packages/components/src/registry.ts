// Auto-generated registry from manifest
// Do not edit manually - regenerate with 'pnpm build'

import type { ComponentManifest, ComponentManifestEntry } from './schema';

const manifest: ComponentManifest = {
  "generatedAt": "2025-06-27T20:46:50.340Z",
  "version": "2.0.0",
  "components": [
    {
      "id": "accordion",
      "path": "src/core/accordion/accordion.tsx",
      "template": "/templates/accordion.txt",
      "meta": {
        "name": "accordion",
        "category": "layout",
        "status": "stable",
        "description": "An accordion allows users to toggle the display of sections of content. Each accordion consists of a header with a title and content area.",
        "tags": [
          "disclosure",
          "collapsible",
          "expandable",
          "content"
        ],
        "version": "2.0.0"
      },
      "sha256": "a344fed7668493816c4739f59811ace07a0a9114a69d84f2a7be76c8961cbd24"
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
      "id": "calendar",
      "path": "src/core/calendar/calendar.tsx",
      "template": "/templates/calendar.txt",
      "meta": {
        "name": "calendar",
        "category": "data-entry",
        "status": "stable",
        "description": "A calendar displays one or more date grids and allows users to select either a single date or a contiguous range of dates.",
        "tags": [
          "form",
          "interactive",
          "date-time"
        ],
        "version": "2.0.0"
      },
      "sha256": "f319d0dc21160633a1cf310705b3e4a6e15e8e7082df9939fdafd99f646eb681"
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
      "id": "checkbox",
      "path": "src/core/checkbox/checkbox.tsx",
      "template": "/templates/checkbox.txt",
      "meta": {
        "name": "checkbox",
        "category": "forms",
        "status": "stable",
        "description": "A checkbox allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.",
        "tags": [
          "form",
          "interactive"
        ],
        "version": "2.0.0"
      },
      "sha256": "7facdb015c7b6acc8fd477b4dcec57b4d96f4c36e07f03c883ea4f24b320ea66"
    },
    {
      "id": "date-field",
      "path": "src/core/date-field/date-field.tsx",
      "template": "/templates/date-field.txt",
      "meta": {
        "name": "date-field",
        "category": "forms",
        "status": "stable",
        "description": "A date field allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.",
        "tags": [
          "form",
          "interactive",
          "date"
        ],
        "version": "2.0.0"
      },
      "sha256": "1730ca8154a12b5579bf542354393dfcb73bbcc4b45171720bd497ce1bed677e"
    },
    {
      "id": "date-picker",
      "path": "src/core/date-picker/date-picker.tsx",
      "template": "/templates/date-picker.txt",
      "meta": {
        "name": "date-picker",
        "category": "forms",
        "status": "stable",
        "description": "A date picker combines one or more DateFields with a calendar popover, allowing users to enter or select a single date/time or a range.",
        "tags": [
          "form",
          "interactive",
          "date-time"
        ],
        "version": "2.0.0"
      },
      "sha256": "e8ccc35aeaac7f6ee228d83683f4a1817dac39ab99d2056cf95311202059093e"
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
      "id": "meter",
      "path": "src/core/meter/meter.tsx",
      "template": "/templates/meter.txt",
      "meta": {
        "name": "meter",
        "category": "data-display",
        "status": "stable",
        "description": "A meter represents a quantity within a known range, or a fractional value.",
        "tags": [
          "data-display",
          "progress"
        ],
        "version": "2.0.0"
      },
      "sha256": "d4990cefc83f17004a861bb023ce8ca1188a0c7c22a6e15dcc57b166870625a2"
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
    },
    {
      "id": "popover",
      "path": "src/core/popover/popover.tsx",
      "template": "/templates/popover.txt",
      "meta": {
        "name": "popover",
        "category": "overlays",
        "status": "stable",
        "description": "A popover is an overlay element positioned relative to a trigger.",
        "tags": [
          "overlay",
          "interactive"
        ],
        "version": "2.0.0"
      },
      "sha256": "1f7c1da59ea4c682db0fe5bdab98278d3c2339def5b21b50b2c76225eaa35b21"
    },
    {
      "id": "radio-group",
      "path": "src/core/radio-group/radio-group.tsx",
      "template": "/templates/radio-group.txt",
      "meta": {
        "name": "radio-group",
        "category": "forms",
        "status": "stable",
        "description": "A radio group allows a user to select a single option from a list of mutually exclusive options.",
        "tags": [
          "form",
          "interactive",
          "selection"
        ],
        "version": "2.0.0"
      },
      "sha256": "afbc2504218e140e94b59d793d522e3d73451d972399189e2056364f2a93c2e6"
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
      "sha256": "852230446935a69a3af7999e01f503250931dc9e89f0eb2f178224c506de074f"
    },
    {
      "id": "menu",
      "path": "src/core/menu/menu.tsx",
      "template": "/templates/menu.txt",
      "meta": {
        "name": "menu",
        "category": "pickers",
        "status": "stable",
        "description": "A menu displays a list of actions or options that a user can choose.",
        "tags": [
          "interactive",
          "navigation"
        ],
        "version": "2.0.0"
      },
      "sha256": "499ad0760013f8e35bd542846ee266665fd1430d27b755a645369cfb73a3feb6"
    },
    {
      "id": "slider",
      "path": "src/core/slider/slider.tsx",
      "template": "/templates/slider.txt",
      "meta": {
        "name": "slider",
        "category": "forms",
        "status": "stable",
        "description": "A slider allows a user to select one or more values within a range.",
        "tags": [
          "form",
          "interactive",
          "range"
        ],
        "version": "2.0.0"
      },
      "sha256": "c077282655ce31303167e6b28cfa724a57aa8a141ffc6b813bdd730bbadec210"
    },
    {
      "id": "switch",
      "path": "src/core/switch/switch.tsx",
      "template": "/templates/switch.txt",
      "meta": {
        "name": "switch",
        "category": "forms",
        "status": "stable",
        "description": "A switch allows a user to turn a setting on or off.",
        "tags": [
          "form",
          "interactive",
          "toggle"
        ],
        "version": "2.0.0"
      },
      "sha256": "8f5bca38bfd3b6d7d6daa0b531c9e814e0ec688ca211005866c06e3a8523e14b"
    },
    {
      "id": "table",
      "path": "src/core/table/table.tsx",
      "template": "/templates/table.txt",
      "meta": {
        "name": "table",
        "category": "data-display",
        "status": "stable",
        "description": "A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys, and optionally supports row selection and sorting.",
        "tags": [
          "data-display",
          "interactive"
        ],
        "version": "2.0.0"
      },
      "sha256": "567d090d572feb8ab3c792b9a810503816794e15127e1c75091af5f62154773a"
    },
    {
      "id": "tabs",
      "path": "src/core/tabs/tabs.tsx",
      "template": "/templates/tabs.txt",
      "meta": {
        "name": "tabs",
        "category": "navigation",
        "status": "stable",
        "description": "Tabs organize content into multiple sections and allow users to navigate between them.",
        "tags": [
          "navigation",
          "interactive",
          "layout"
        ],
        "version": "2.0.0"
      },
      "sha256": "03c2b92a89abade7a4efef0cb0485b014e86d958ed3860b7018823d1d1c62d14"
    },
    {
      "id": "tag-group",
      "path": "src/core/tag-group/tag-group.tsx",
      "template": "/templates/tag-group.txt",
      "meta": {
        "name": "tag-group",
        "category": "forms",
        "status": "stable",
        "description": "A tag group is a focusable list of labels, categories, keywords, filters, or other items, with support for keyboard navigation, selection, and removal.",
        "tags": [
          "form",
          "interactive",
          "selection",
          "filtering"
        ],
        "version": "2.0.0"
      },
      "sha256": "9bd4c4323b868e72feceb1b80d3f3c63528ceb382b84591494d936d9ae9fac67"
    },
    {
      "id": "time-field",
      "path": "src/core/time-field/time-field.tsx",
      "template": "/templates/time-field.txt",
      "meta": {
        "name": "time-field",
        "category": "forms",
        "status": "stable",
        "description": "A time field allows users to enter and edit time values using a keyboard. Each part of a time value is displayed in an individually editable segment.",
        "tags": [
          "form",
          "interactive",
          "time"
        ],
        "version": "2.0.0"
      },
      "sha256": "8d0b9c7f809c17829b366f44256c0a3368359ee3695196c05ae409ec40b00203"
    },
    {
      "id": "toggle",
      "path": "src/core/toggle/toggle.tsx",
      "template": "/templates/toggle.txt",
      "meta": {
        "name": "toggle",
        "category": "forms",
        "status": "stable",
        "description": "A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.",
        "tags": [
          "form",
          "interactive",
          "toggle"
        ],
        "version": "2.0.0"
      },
      "sha256": "0b4f2f09dfe3245e09b1a3460f458fb988db11b4029bd162643e7d04518674b0"
    },
    {
      "id": "tooltip",
      "path": "src/core/tooltip/tooltip.tsx",
      "template": "/templates/tooltip.txt",
      "meta": {
        "name": "tooltip",
        "category": "overlays",
        "status": "stable",
        "description": "A tooltip displays a description of an element on hover or focus.",
        "tags": [
          "overlay",
          "interactive",
          "help"
        ],
        "version": "2.0.0"
      },
      "sha256": "3596cebb1c894862cf08f9bd6c3dda1d3bea6c9bbcc3674fe3947a470c679226"
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
