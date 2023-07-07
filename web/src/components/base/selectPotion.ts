import { tv } from "tailwind-variants";

export const selectPotion = tv({
  slots: {
    trigger: "flex h-12 w-56 items-center rounded-xl bg-surface-3 px-2",
    content: "w-56 rounded-xl bg-surface-3 p-2 text-fg-3",
    option:
      "mb-1 cursor-pointer rounded-md p-2 hover:bg-primary hover:text-fg-2 data-[selected]:bg-primary",
  },
});
