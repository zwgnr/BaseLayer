import { tv } from "tailwind-variants";

export const sliderPotion = tv({
  slots: {
    sliderRoot: "w-full",
    sliderControl: "relative flex items-center py-2",
    sliderTrack: "h-2 flex-1 rounded-md bg-surface-3",
    sliderRange: "h-2 rounded-md bg-accent",
    sliderThumb:
      "h-6 w-6 rounded-full border-2 border-accent bg-surface-2 shadow-sm outline-none data-[focus]:outline-none",
    sliderMarker: "mt-2 text-sm",
  },
});
