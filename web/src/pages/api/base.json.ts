import type { APIRoute } from "astro";

type Component = {
  potion: string;
  name: string;
  files: string;
};

const components: Component[] = [
  {
    potion: "colorPicker",
    name: "ColorPicker",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const colorPicker = tv({\n  slots: {\n    content:\n      \"w-80 overflow-hidden rounded-xl border border-border bg-surface shadow-lg\",\n    area: \"h-72\",\n    areaThumb:\n      \"z-1 h-4 w-4 rounded-full border-2 border-white shadow-lg shadow-black outline-none\",\n    gradient: \"h-full rounded-t-xl\",\n    sliderTrack: \"h-4 rounded-full border\",\n    swatch: \"h-4 w-4 shrink-0 rounded-sm\",\n    swatchGroup: \"inline-flex w-full flex-wrap gap-2\",\n    input:\n      \"w-16 rounded-md border border-border bg-surface-2 p-1 text-fg-4 ring-focus focus-visible:outline-none focus-visible:ring-2\",\n    sliderThumb:\n      \"h-4 w-4 -translate-x-2/4 -translate-y-2/4 rounded-full border-2 border-white shadow-lg shadow-black outline-none\",\n  },\n});\n"
  },
  {
    potion: "dropdownPotion",
    name: "Dropdown",
    files: "import { tv } from \"tailwind-variants\";\n\nconst baseItemPotion = tv({\n  base: \"block cursor-pointer items-center rounded-md text-sm  text-fg-3 data-[focus]:bg-surface-2 data-[selected]:bg-primary\",\n});\n\nexport const dropdownPotion = tv({\n  slots: {\n    content:\n      \"min-w-[15rem] rounded-lg border bg-surface p-2 shadow-xl outline-none \",\n    item: [baseItemPotion(), \"mb-2 flex justify-between p-2\"],\n    itemGroupLabel: \"text-sm  font-bold text-fg-2\",\n    optionItem: [baseItemPotion(), \"w-full rounded-md p-2 text-sm\"],\n    triggerItem: [baseItemPotion(), \"inline-flex w-full flex-wrap gap-2\"],\n    seperator: \"w-full rounded-md border border-gray-200\",\n  },\n});\n"
  },
  {
    potion: "hoverCardPotion",
    name: "HoverCard",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const hoverCardPotion = tv({\n  slots: {\n    positioner: \"rounded-lg bg-surface-3 shadow-xl\",\n    content: \"max-w-96 relative w-96 p-4 text-fg-2\",\n  },\n});\n"
  },
  {
    potion: "numberInputPotion",
    name: "NumberInput",
    files: "import { tv } from \"tailwind-variants\";\n\nconst baseTriggerStyles = tv({\n  base: \"relative inline-flex cursor-pointer select-none appearance-none items-center whitespace-nowrap rounded-md bg-surface-3 align-middle font-semibold outline-none transition duration-100 ease-out hover:bg-surface-2 focus-visible:z-10 focus-visible:border-secondary focus-visible:shadow-md data-[disabled]:cursor-not-allowed hover:data-[disabled]:cursor-not-allowed\",\n});\n\nexport const numberInputPotion = tv({\n  slots: {\n    root: \"text-md flex overflow-hidden rounded-lg border-2 border-transparent bg-surface-3 pl-4 shadow-sm focus-within:z-10 focus-within:border-secondary focus-within:shadow-lg\",\n    control: \"border-surface-4 flex flex-col\",\n    field: \"bg-surface-3 outline-none\",\n    decrementTrigger: [baseTriggerStyles()],\n    incrementTrigger: [baseTriggerStyles()],\n  },\n});\n"
  },
  {
    potion: "paginationPotion",
    name: "Pagination",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const paginationPotion = tv({\n  slots: {\n    root: \"flex justify-center\",\n    list: \"flex list-none gap-1 p-0\",\n    pageTrigger: \" \",\n    ellipsis: \"min-w-10 inline-flex h-10 items-center px-4 text-sm\",\n  },\n});\n"
  },
  {
    potion: "pinInputPotion",
    name: "PinInput",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const pinInputPotion = tv({\n  slots: {\n    root: \"flex flex-row items-center gap-4\",\n    field:\n      \"h-12 w-12 appearance-none rounded-md p-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-surface-3\",\n    control: \"flex gap-2\",\n    label: \"text-base font-bold\",\n  },\n});\n"
  },
  {
    potion: "popoverPotion",
    name: "Popover",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const popoverPotion = tv({\n  slots: {\n    positioner: \"z-50 rounded-lg bg-surface-3 shadow-xl \",\n    content: \"max-w-96 w-72 p-4\",\n    title: \"text-md font-bold\",\n  },\n});\n"
  },
  {
    potion: "radioGroupPotion",
    name: "RadioGroup",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const radioGroupPotion = tv({\n  slots: {\n    root: \"flex flex-col gap-2\",\n    control:\n      \"h-5 w-5 appearance-none rounded-full border-2 bg-surface data-[checked]:border-primary data-[checked]:bg-surface data-[checked]:outline data-[checked]:outline-[4px] data-[checked]:outline-offset-[-5px] data-[checked]:outline-primary\",\n    radio: \"flex cursor-pointer items-center gap-3 rounded-full\",\n    radioLabel: \"\",\n  },\n});\n"
  },
  {
    potion: "rangeSliderPotion",
    name: "RangeSlider",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const rangeSliderPotion = tv({\n  slots: {\n    root: \"w-full\",\n    control: \"relative flex items-center py-2\",\n    track: \"h-2 flex-1 rounded-md bg-surface-3\",\n    range: \"h-2 rounded-md bg-secondary\",\n    thumb:\n      \"h-6 w-6 rounded-full border-2 border-secondary bg-surface-2 shadow-sm outline-none data-[focus]:outline-none\",\n    marker: \"mt-2 text-sm text-fg-4\",\n  },\n});\n"
  },
  {
    potion: "ratingGroupPotion",
    name: "RatingGroup",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const ratingGroupPotion = tv({\n  slots: {\n    root: \"\",\n    control: \"flex gap-1\",\n    rating:\n      \"[&[data-[highlighted]]:text-secondary cursor-pointer fill-surface-3 text-fg-3 transition duration-75  focus:outline-0 [&>svg]:h-12 [&>svg]:w-12 [&[data-highlighted]]:fill-secondary\",\n  },\n});\n"
  },
  {
    potion: "selectPotion",
    name: "Select",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const selectPotion = tv({\n  slots: {\n    trigger: \"flex h-12 w-56 items-center rounded-xl bg-surface-3 px-2\",\n    content: \"w-56 rounded-xl bg-surface-3 p-2 text-fg-3\",\n    option:\n      \"mb-1 cursor-pointer rounded-md p-2 hover:bg-primary hover:text-fg-2 data-[selected]:bg-primary\",\n  },\n});\n"
  },
  {
    potion: "splitterPotion",
    name: "Splitter",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const splitterPotion = tv({\n  slots: {\n    root: \"flex w-full gap-2\",\n    panel: \"flex flex-1 overflow-auto bg-surface-3\",\n    resizeTrigger:\n      \"relative flex items-center justify-center rounded-md bg-surface-4 p-0 outline-0 transition-colors ease-in-out hover:bg-gray-900 active:bg-slate-900 data-[orientation=horizontal]:my-2 data-[orientation=vertical]:mx-1 data-[orientation=vertical]:h-1 data-[orientation=horizontal]:w-1 data-[disabled]:opacity-50\",\n  },\n});\n"
  },
  {
    potion: "switchPotion",
    name: "Switch",
    files: "import { tv, type VariantProps } from \"tailwind-variants\";\n\nexport const switchPotion = tv({\n  slots: {\n    root: \"w-fit-content relative flex items-center gap-2\",\n    control:\n      \"focus-visible:focus focus-visible:shadow-0-0-0-4 inline-flex flex-shrink-0 cursor-pointer items-center justify-start rounded-full  border-2 border-transparent transition-colors duration-150\",\n    thumb:\n      \"pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform\",\n    label: \"text-fg-3\",\n  },\n  variants: {\n    intent: {\n      primary: {\n        control: \"bg-surface-3 data-[checked]:bg-primary\",\n      },\n      secondary: {\n        control: \"bg-surface-3 data-[checked]:bg-green-800\",\n        thumb: \"bg-secondary\",\n      },\n    },\n    size: {\n      sm: {\n        root: \"h-[20px] w-[36px]\",\n        thumb: \"h-4 w-4 translate-x-0 data-[checked]:translate-x-8\",\n      },\n      md: {\n        root: \"\",\n        control: \"h-6 w-11\",\n        thumb: \"h-5 w-5 translate-x-0 data-[checked]:translate-x-5\",\n      },\n      lg: {\n        root: \"h-[30px] w-[56px]\",\n        thumb:\n          \"h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0\",\n      },\n    },\n  },\n  defaultVariants: {\n    intent: \"primary\",\n    size: \"md\",\n  },\n});\n\nexport type SwitchPotionProps = VariantProps<typeof switchPotion>;\n"
  },
  {
    potion: "tagsInputPotion",
    name: "TagsInput",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const tagsInputPotion = tv({\n  slots: {\n    root: \"w-full\",\n    control:\n      \"flex flex-wrap gap-2 rounded-lg border-2 border-surface-3 bg-surface p-3 text-fg shadow-md transition duration-100 focus-within:z-10  focus-within:border-secondary focus-within:shadow-lg\",\n    field: \"bg-surface outline-none\",\n    tag: \"inline-flex h-6 items-center justify-center rounded-lg border border-border bg-surface pl-2.5 pr-1 text-sm data-[selected]:z-10 data-[selected]:border-secondary [&[data=hidden]]:hidden\",\n    tagInput: \"bg-surface outline-none\",\n    deleteTrigger:\n      \"ml-1 inline-flex h-4 items-center bg-transparent p-0 text-fg-5 [&>svg]:h-4 [&>svg]:w-4\",\n  },\n});\n"
  },
  {
    potion: "toastPotion",
    name: "Toast",
    files: "import { VariantProps, tv } from \"tailwind-variants\";\n\nexport const toastPotion = tv({\n  slots: {\n    root: \"min-w-56 rounded-xl border bg-surface p-4 shadow-lg\",\n    group: \"p-4\",\n    title: \"text-sm font-semibold text-fg\",\n    description: \"text-sm text-fg-2\",\n  },\n  variants: {\n    intent: {\n      base: {\n        root: \"border-none bg-secondary\",\n        title: \"text-white\",\n        description: \"text-white\",\n      },\n      success: {\n        root: \"border-none bg-positive\",\n        title: \"text-black\",\n        description: \"text-black\",\n      },\n      alert: {\n        root: \"border-none bg-warning\",\n        title: \"text-black\",\n        description: \"text-black\",\n      },\n      error: {\n        root: \"border-none bg-critical\",\n        title: \"text-black\",\n        description: \"text-black\",\n      },\n    },\n  },\n  defaultVariants: {\n    intent: \"base\",\n  },\n});\n\nexport type ToastPotionProps = VariantProps<typeof toastPotion>;\n"
  },
  {
    potion: "tooltipPotion",
    name: "Tooltip",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const tooltipPotion = tv({\n  slots: {\n    positioner: \"rounded-lg bg-surface-3 px-3 py-2 shadow-lg\",\n    content: \"text-xs font-semibold text-fg-3\",\n  },\n});\n"
  }
];

export const get: APIRoute = () => {
  return {
    body: JSON.stringify(components),
  };
};
