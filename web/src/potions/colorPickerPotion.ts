import { tv } from "tailwind-variants";

export const colorPickerPotion = tv({
  slots: {
    cpContent: "w-fit overflow-hidden rounded-xl border bg-surface shadow-lg",
    cpAreaThumb:
      "z-1 h-4 w-4 rounded-full border-2 border-white shadow-lg shadow-black outline-none",
    cpChannelSliderTrack: "h-4 rounded-full border",
    cpSwatch: "h-4 w-4 shrink-0 rounded-sm",
    cpSwatchGroup: "inline-flex w-full flex-wrap gap-2",
    cpInput: "w-16 rounded-md border border-gray-200",
    cpChannelSliderThumb:
      "h-4 w-4 -translate-x-2/4 -translate-y-2/4 rounded-full border-2 border-white shadow-lg shadow-black outline-none",
  },
});
