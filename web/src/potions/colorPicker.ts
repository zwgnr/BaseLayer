import { tv } from "tailwind-variants";

export const colorPicker = tv({
  slots: {
    content:
      "w-80 overflow-hidden rounded-xl border border-border bg-surface shadow-lg",
    area: "h-72",
    areaThumb:
      "z-1 h-4 w-4 rounded-full border-2 border-white shadow-lg shadow-black outline-none",
    gradient: "h-full rounded-t-xl",
    sliderTrack: "h-4 rounded-full border",
    swatch: "h-4 w-4 shrink-0 rounded-sm",
    swatchGroup: "inline-flex w-full flex-wrap gap-2",
    input:
      "w-16 rounded-md border border-border bg-surface-2 p-1 text-text-4 ring-focus focus-visible:outline-none focus-visible:ring-2",
    sliderThumb:
      "h-4 w-4 -translate-x-2/4 -translate-y-2/4 rounded-full border-2 border-white shadow-lg shadow-black outline-none",
  },
});
