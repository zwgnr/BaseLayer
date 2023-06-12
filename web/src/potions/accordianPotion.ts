import { tv } from "tailwind-variants";

export const accordianPotion = tv({
  slots: {
    root: "flex w-full flex-col divide-y-2 divide-neutral-400 rounded-xl p-8",
    item: "p-2",
    trigger:
      "flex w-full items-center justify-between rounded-xl bg-transparent p-0 pb-2 text-lg font-bold transition-all hover:underline [&:not(data-[expanded])]:pb-4 [&[data-expanded]>svg]:rotate-180",
    content: " text-sm data-[expanded]:p-0",
  },
});
