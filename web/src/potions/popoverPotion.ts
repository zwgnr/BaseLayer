import { tv } from "tailwind-variants";

export const popoverPotion = tv({
  slots: {
    popoverPositioner: "z-50 rounded-lg bg-surface shadow-xl ",
    popoverContent: "max-w-96  w-96 p-4",
    popoverTitle: "text-md font-bold",
  },
});
