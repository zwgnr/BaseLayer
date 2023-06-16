import { tv } from "tailwind-variants";

export const popoverPotion = tv({
  slots: {
    positioner: "z-50 rounded-lg bg-surface-3 shadow-xl ",
    content: "max-w-96 w-72 p-4",
    title: "text-md font-bold",
  },
});
