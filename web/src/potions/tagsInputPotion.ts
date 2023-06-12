import { tv } from "tailwind-variants";

export const tagsInputPotion = tv({
  slots: {
    root: "w-full",
    control:
      "flex flex-wrap gap-2 rounded-lg border-2 border-surface-3 bg-surface p-3 text-text shadow-md transition duration-100 focus-within:z-10  focus-within:border-accent focus-within:shadow-lg",
    field: "bg-surface outline-none",
    tag: "inline-flex h-6 items-center justify-center rounded-lg border border-border bg-surface pl-2.5 pr-1 text-sm data-[selected]:z-10 data-[selected]:border-accent [&[data=hidden]]:hidden",
    tagInput: "bg-surface outline-none",
    deleteTrigger:
      "ml-1 inline-flex h-4 items-center bg-transparent p-0 text-text-5 [&>svg]:h-4 [&>svg]:w-4",
  },
});
