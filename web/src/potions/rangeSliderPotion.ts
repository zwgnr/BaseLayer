import { tv } from "tailwind-variants";

export const rangeSliderPotion = tv({
  slots: {
    root: "w-full",
    control: "relative flex items-center py-2",
    track: "h-2 flex-1 rounded-md bg-surface-3",
    range: "h-2 rounded-md bg-accent",
    thumb:
      "h-6 w-6 rounded-full border-2 border-accent bg-surface-2 shadow-sm outline-none data-[focus]:outline-none",
    marker: "mt-2 text-sm",
  },
});
