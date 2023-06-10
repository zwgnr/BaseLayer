import type { APIRoute } from "astro";

type Potion = {
  potion: string;
  name: string;
  files: string;
};

const potions: Potion[] = [
  {
    potion: "accordianPotion",
    name: "Accordian",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const accordianPotion = tv({\n  slots: {\n    accordianRoot:\n      \"flex w-full flex-col divide-y-2 divide-neutral-400 rounded-xl p-8\",\n    accordianItem: \"p-2\",\n    accordianTrigger:\n      \"flex w-full items-center justify-between rounded-xl bg-transparent p-0 pb-2 text-lg font-bold transition-all hover:underline [&:not(data-[expanded])]:pb-4 [&[data-expanded]>svg]:rotate-180\",\n    accordianContent: \" data-[expanded]:p-0 text-sm\",\n  },\n});\n"
  },
  {
    potion: "avatarPotion",
    name: "Avatar",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const avatarPotion = tv({\n  slots: {\n    avatarRoot: \"h-16 w-16 rounded-full border-2 border-accent\",\n    avatarFallback:\n      \"flex h-[inherit] items-center justify-center bg-surface-2 font-bold text-text\",\n    avatarImage: \"object-cover\",\n  },\n});\n"
  },
  {
    potion: "buttonPotion",
    name: "Button",
    files: "import { tv, type VariantProps } from \"tailwind-variants\";\n\nexport const buttonPotion = tv({\n  base: \"inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-transform duration-100 active:scale-[.97] data-[disabled]:pointer-events-none data-[disabled]:opacity-50\",\n  variants: {\n    intent: {\n      primary: \"bg-primary text-primary-content hover:bg-primary-400\",\n      accent: \"bg-accent text-accent-content hover:bg-accent-400\",\n    },\n    state: {\n      filled: \"\",\n      ghost: \"\",\n      soft: \"\",\n      outline: \"\",\n    },\n    size: {\n      sm: \"h-8 px-2 text-sm\",\n      md: \"text-md h-10 px-4\",\n      lg: \"h-12 px-6 text-lg\",\n    },\n  },\n  compoundVariants: [\n    {\n      intent: \"primary\",\n      state: \"ghost\",\n      className: \"border-2 border-primary bg-primary/30 hover:bg-primary\",\n    },\n    {\n      intent: \"primary\",\n      state: \"soft\",\n      className:\n        \"bg-primary-200 text-primary-600 hover:bg-primary-400 hover:text-black\",\n    },\n    {\n      intent: \"primary\",\n      state: \"outline\",\n      className:\n        \"border-2 border-primary bg-transparent text-primary-content hover:bg-primary-500 hover:text-black\",\n    },\n    {\n      intent: \"accent\",\n      state: \"ghost\",\n      className: \"border-2 border-primary bg-primary/30 hover:bg-primary\",\n    },\n    {\n      intent: \"accent\",\n      state: \"soft\",\n      className:\n        \"bg-primary-200 text-primary-600 hover:bg-primary-400 hover:text-black\",\n    },\n    {\n      intent: \"accent\",\n      state: \"outline\",\n      className:\n        \"border-2 border-primary bg-transparent text-primary-content hover:bg-primary-500 hover:text-black\",\n    },\n  ],\n  defaultVariants: {\n    intent: \"primary\",\n    state: \"filled\",\n    size: \"md\",\n  },\n});\n\nexport type ButtonPotionProps = VariantProps<typeof buttonPotion>;\n"
  },
  {
    potion: "carouselPotion",
    name: "Carousel",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const carouselPotion = tv({\n  slots: {\n    carouselRoot: \"w-full\",\n    carouselViewport: \"relative overflow-x-hidden\",\n    carouselControl:\n      \"z-1  absolute left-4 right-4 top-1/2 flex -translate-y-2/4 justify-between\t\",\n  },\n});\n"
  },
  {
    potion: "checkboxPotion",
    name: "Checkbox",
    files: "import { VariantProps, tv } from \"tailwind-variants\";\n\nexport const checkboxPotion = tv({\n  slots: {\n    checkboxRoot: \"relative cursor-pointer\",\n    checkboxControl:\n      \"flex cursor-pointer items-center justify-center border-2 border-surface-4 data-[checked]:border-primary data-[checked]:bg-primary\",\n    checkboxLabel: \"\",\n  },\n  variants: {\n    size: {\n      sm: { checkboxControl: \"h-4 w-4 rounded-md\" },\n      md: { checkboxControl: \"h-6 w-6 rounded-lg\" },\n      lg: { checkboxControl: \"h-8 w-8 rounded-lg\" },\n    },\n  },\n  defaultVariants: {\n    size: \"md\",\n  },\n});\n\nexport type CheckboxPotionProps = VariantProps<typeof checkboxPotion>;\n"
  },
  {
    potion: "colorPickerPotion",
    name: "ColorPicker",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const colorPickerPotion = tv({\n  slots: {\n    cpContent: \"w-fit overflow-hidden rounded-xl border bg-surface shadow-lg\",\n    cpAreaThumb:\n      \"z-1 h-4 w-4 rounded-full border-2 border-white shadow-lg shadow-black outline-none\",\n    cpChannelSliderTrack: \"h-4 rounded-full border\",\n    cpSwatch: \"h-4 w-4 shrink-0 rounded-sm\",\n    cpSwatchGroup: \"inline-flex w-full flex-wrap gap-2\",\n    cpInput: \"w-16 rounded-md border border-gray-200\",\n    cpChannelSliderThumb:\n      \"h-4 w-4 -translate-x-2/4 -translate-y-2/4 rounded-full border-2 border-white shadow-lg shadow-black outline-none\",\n  },\n});\n"
  },
  {
    potion: "dialogPotion",
    name: "Dialog",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const dialogPotion = tv({\n  slots: {\n    dialogBackdrop: \"fixed inset-0 z-40 bg-slate-700/50\",\n    dialogContainer: \"fixed inset-0 z-40 flex items-center justify-center\",\n    dialogContent:\n      \"min-w-80 relative z-50 w-80 rounded-xl bg-surface shadow-lg\",\n    dialogDescription: \"text-sm text-gray-400\",\n    dialogTitle: \"text-lg font-bold\",\n  },\n});\n"
  },
  {
    potion: "dropdownPotion",
    name: "Dropdown",
    files: "import { tv } from \"tailwind-variants\";\n\nconst baseItemStyles = tv({\n  base: \"block cursor-pointer items-center rounded-md  text-sm data-[focus]:bg-surface-2 data-[selected]:bg-primary\",\n});\n\nexport const dropdownPotion = tv({\n  slots: {\n    dropdownContent:\n      \"min-w-[15rem] rounded-lg border bg-surface p-2 shadow-xl outline-none \",\n    dropdownItem: [baseItemStyles(), \"mb-2 flex justify-between p-2\"],\n    dropdownItemGroupLabel: \"text-sm  font-bold\",\n    dropdownOptionItem: [baseItemStyles(), \"w-full rounded-md p-2 text-sm\"],\n    dropdownTriggerItem: [\n      baseItemStyles(),\n      \"inline-flex w-full flex-wrap gap-2\",\n    ],\n    dropdownSeperator: \"w-full rounded-md border border-gray-200\",\n  },\n});\n"
  },
  {
    potion: "hoverCardPotion",
    name: "HoverCard",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const hoverCardPotion = tv({\n  slots: {\n    hcPositioner: \"rounded-lg bg-surface-3 shadow-xl\",\n    hcContent: \"max-w-96 relative w-96 p-4\",\n  },\n});\n"
  },
  {
    potion: "pinInputPotion",
    name: "PinInput",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const pinInputPotion = tv({\n  slots: {\n    piRoot: \"flex flex-row items-center gap-4\",\n    piField:\n      \"h-16 w-16 rounded-md p-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary\",\n    piControl: \"flex gap-2\",\n    piLabel: \"text-md font-bold\",\n  },\n});\n"
  },
  {
    potion: "popoverPotion",
    name: "Popover",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const popoverPotion = tv({\n  slots: {\n    popoverPositioner: \"z-50 rounded-lg bg-surface shadow-xl \",\n    popoverContent: \"max-w-96  w-96 p-4\",\n    popoverTitle: \"text-md font-bold\",\n  },\n});\n"
  },
  {
    potion: "radioGroupPotion",
    name: "RadioGroup",
    files: "\nimport { tv } from \"tailwind-variants\";\n\nexport const radioGroupPotion = tv({\n  slots: {\n    radioGroupRoot: \"flex flex-col gap-2\",\n    radioControl:\n      \"h-5 w-5 rounded-full border-2 bg-surface data-[checked]:border-primary data-[checked]:bg-surface data-[checked]:outline data-[checked]:outline-[4px] data-[checked]:outline-offset-[-5px] data-[checked]:outline-primary\",\n    radio: \"flex cursor-pointer items-center gap-3\",\n    radioLabel: \"\",\n  },\n});\n"
  },
  {
    potion: "rangeSliderPotion",
    name: "RangeSlider",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const rangeSliderPotion = tv({\n  slots: {\n    rsRoot: \"w-full\",\n    rsControl: \"relative flex items-center py-2\",\n    rsTrack: \"h-2 flex-1 rounded-md bg-surface-3\",\n    rsRange: \"h-2 rounded-md bg-accent\",\n    rsThumb:\n      \"h-6 w-6 rounded-full border-2 border-accent bg-surface-2 shadow-sm outline-none data-[focus]:outline-none\",\n    rsMarker: \"text-sm mt-2\",\n  },\n});\n"
  },
  {
    potion: "ratingGroupPotion",
    name: "RatingGroup",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const ratingGroupPotion = tv({\n  slots: {\n    rgRoot: \"\",\n    rgControl: \"flex gap-1\",\n    rgRating:\n      \"[&[data-[highlighted]]:text-accent cursor-pointer fill-surface-3 text-text-3 transition duration-75  focus:outline-0 [&>svg]:h-12 [&>svg]:w-12 [&[data-highlighted]]:fill-accent\",\n  },\n});\n"
  },
  {
    potion: "selectPotion",
    name: "Select",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const selectPotion = tv({\n  slots: {\n    selectTrigger: \"flex h-12 w-56 items-center rounded-xl bg-slate-300 px-2\",\n    selectContent: \"w-56 rounded-xl bg-slate-300 p-2\",\n    selectOption:\n      \"mb-1 cursor-pointer rounded-md p-2 hover:bg-primary-300 data-[selected]:bg-primary\",\n  },\n});\n"
  },
  {
    potion: "sliderPotion",
    name: "Slider",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const sliderPotion = tv({\n  slots: {\n    sliderRoot: \"w-full\",\n    sliderControl: \"relative flex items-center py-2\",\n    sliderTrack: \"h-2 flex-1 rounded-md bg-surface-3\",\n    sliderRange: \"h-2 rounded-md bg-accent\",\n    sliderThumb:\n      \"h-6 w-6 rounded-full border-2 border-accent bg-surface-2 shadow-sm outline-none data-[focus]:outline-none\",\n    sliderMarker: \"mt-2 text-sm\",\n  },\n});\n"
  },
  {
    potion: "switchPotion",
    name: "Switch",
    files: "import { tv, type VariantProps } from \"tailwind-variants\";\n\nexport const switchPotion = tv({\n  slots: {\n    switchRoot: \"w-fit-content relative flex items-center gap-2\",\n    switchControl:\n      \"focus-visible:focus focus-visible:shadow-0-0-0-4 inline-flex flex-shrink-0 cursor-pointer items-center justify-start rounded-full  border-2 border-transparent transition-colors duration-150\",\n    switchThumb:\n      \"pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform\",\n  },\n  variants: {\n    intent: {\n      primary: {\n        control: \"bg-gray-200 data-[checked]:bg-primary\",\n      },\n      accent: {\n        control: \"bg-gray-200 data-[checked]:bg-green-800\",\n        thumb: \"bg-primary\",\n      },\n    },\n    size: {\n      sm: {\n        root: \"h-[20px] w-[36px]\",\n        thumb: \"h-4 w-4 translate-x-0 data-[checked]:translate-x-8\",\n      },\n      md: {\n        root: \"\",\n        control: \"h-6 w-11\",\n        thumb: \"h-5 w-5 translate-x-0 data-[checked]:translate-x-5\",\n      },\n      lg: {\n        root: \"h-[30px] w-[56px]\",\n        thumb:\n          \"h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0\",\n      },\n    },\n  },\n  defaultVariants: {\n    intent: \"primary\",\n    size: \"md\",\n  },\n});\n\nexport type SwitchPotionProps = VariantProps<typeof switchPotion>;\n"
  },
  {
    potion: "tabsPotion",
    name: "Tabs",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const tabsPotion = tv({\n  slots: {\n    tabsList:\n      \"bg-muted text-muted-foreground relative inline-flex h-10 items-center justify-center rounded-md\",\n    tabsTrigger:\n      \"text-md ring-offset-background focus-visible:ring-ring data-[selected]:bg-background data-[selected]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:shadow-sm\",\n    tabsContent:\n      \"ring-offset-background focus-visible:ring-ring mt-4 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2\",\n    tabsIndicator: \"-bottom-1 h-1 bg-primary\",\n  },\n});\n"
  },
  {
    potion: "toastPotion",
    name: "Toast",
    files: "import { VariantProps, tv } from \"tailwind-variants\";\n\nexport const toastPotion = tv({\n  slots: {\n    toastRoot: \"min-w-56 rounded-xl border bg-surface p-4 shadow-lg\",\n    toastGroup: \"p-4\",\n    toastTitle: \"text-sm font-semibold\",\n    toastDescription: \"text-sm text-text-2\",\n  },\n  variants: {\n    intent: {\n      success: {\n        toastRoot: \"bg-positive\",\n      },\n      alert: {\n        toastRoot: \"bg-warning\",\n      },\n      error: {\n        toastRoot: \"bg-critical\",\n      },\n    },\n  },\n});\n\nexport type ToastPotionProps = VariantProps<typeof toastPotion>;\n"
  },
  {
    potion: "tooltipPotion",
    name: "Tooltip",
    files: "import { tv } from \"tailwind-variants\";\n\nexport const tooltipPotion = tv({\n  slots: {\n    tooltipPositioner: \"rounded-lg bg-surface-3 px-3 py-2 shadow-lg\",\n    tooltipContent: \"text-xs font-semibold\",\n  },\n});\n"
  }
];

export const get: APIRoute = ({ params, request }) => {
  return {
    body: JSON.stringify(potions)
  };
};
