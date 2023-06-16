import { tv } from "tailwind-variants";

export const paginationPotion = tv({
  slots: {
    root: "flex justify-center",
    list: "flex list-none gap-1 p-0",
    pageTrigger: " ",
    ellipsis: "min-w-10 inline-flex h-10 items-center px-4 text-sm",
  },
});
