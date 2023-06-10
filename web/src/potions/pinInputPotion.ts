import { tv } from "tailwind-variants";

export const pinInputPotion = tv({
  slots: {
    piRoot: "flex flex-row items-center gap-4",
    piField:
      "h-16 w-16 rounded-md p-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    piControl: "flex gap-2",
    piLabel: "text-md font-bold",
  },
});
