import { tv } from "tailwind-variants";

export const rangeSliderPotion = tv({
  slots: {
    rsRoot: "w-full",
    rsControl: "relative flex items-center py-2",
    rsTrack: "h-2 flex-1 rounded-md bg-surface-3",
    rsRange: "h-2 rounded-md bg-accent",
    rsThumb:
      "h-6 w-6 rounded-full border-2 border-accent bg-surface-2 shadow-sm outline-none data-[focus]:outline-none",
    rsMarker: "text-sm mt-2",
  },
});
