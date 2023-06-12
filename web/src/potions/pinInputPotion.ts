import { tv } from "tailwind-variants";

export const pinInputPotion = tv({
  slots: {
    root: "flex flex-row items-center gap-4",
    field:
      "h-12 w-12 rounded-md p-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    control: "flex gap-2",
    label: "text-base font-bold",
  },
});
