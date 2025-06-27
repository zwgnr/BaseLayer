import type { ExamplesRegistry } from "./schema";

export const examples: ExamplesRegistry["items"] = [
  {
    name: "badge-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/badge-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "badge-variants",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/badge-variants.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "breadcrumbs-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/breadcrumbs-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "breadcrumbs-seperators",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/breadcrumbs-seperators.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "button-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/button-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "button-helper-icons",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/button-helper-icons.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "button-sizes",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/button-sizes.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "button-variants",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/button-variants.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "calendar-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/calendar-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "checkbox-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/checkbox-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "checkbox-group",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/checkbox-group.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "combobox-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/combobox-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "combobox-disabled-option",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/combobox-disabled-option.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "combobox-menu-trigger",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/combobox-menu-trigger.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "date-field-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/date-field-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "input-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/input-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "input-disabled",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/input-disabled.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "input-label",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/input-label.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "modal-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/modal-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "modal-dismissable",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/modal-dismissable.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "select-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/select-base.txt",
        type: "registry:example" as const,
      },
    ],
  },
  {
    name: "switch-base",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/switch-base.txt",
        type: "registry:example" as const,
      },
    ],
  }
];

export function getExample(name: string) {
  return examples.find(example => example.name === name);
}

export default examples;