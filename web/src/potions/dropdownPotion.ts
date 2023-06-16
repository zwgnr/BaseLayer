import { tv } from "tailwind-variants";

const baseItemPotion = tv({
  base: "block cursor-pointer items-center rounded-md text-sm  text-text-3 data-[focus]:bg-surface-2 data-[selected]:bg-primary",
});

export const dropdownPotion = tv({
  slots: {
    content:
      "min-w-[15rem] rounded-lg border bg-surface p-2 shadow-xl outline-none ",
    item: [baseItemPotion(), "mb-2 flex justify-between p-2"],
    itemGroupLabel: "text-sm  font-bold text-text-2",
    optionItem: [baseItemPotion(), "w-full rounded-md p-2 text-sm"],
    triggerItem: [baseItemPotion(), "inline-flex w-full flex-wrap gap-2"],
    seperator: "w-full rounded-md border border-gray-200",
  },
});
