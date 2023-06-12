import { tv } from "tailwind-variants";

export const colorPickerPotion = tv({
  slots: {
    content: "w-fit overflow-hidden rounded-xl border bg-surface shadow-lg",
    areaThumb:
      "z-1 h-4 w-4 rounded-full border-2 border-white shadow-lg shadow-black outline-none",
    channelSliderTrack: "h-4 rounded-full border",
    swatch: "h-4 w-4 shrink-0 rounded-sm",
    swatchGroup: "inline-flex w-full flex-wrap gap-2",
    input: "w-16 rounded-md border border-gray-200",
    channelSliderThumb:
      "h-4 w-4 -translate-x-2/4 -translate-y-2/4 rounded-full border-2 border-white shadow-lg shadow-black outline-none",
  },
});
