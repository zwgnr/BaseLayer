import { tv } from "tailwind-variants";

export const popoverPotion = tv({
  slots: {
    positioner: "z-50 rounded-lg bg-surface shadow-xl ",
    content: "max-w-96  w-96 p-4",
    title: "text-md font-bold",
  },
});
