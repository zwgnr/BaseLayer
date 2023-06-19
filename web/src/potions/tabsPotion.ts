import { tv } from "tailwind-variants";

export const tabsPotion = tv({
  slots: {
    list: "bg-muted text-muted-foreground relative inline-flex items-center justify-center rounded-md",
    trigger:
      "text-md focus-visible:ring-ring h-10  flex appearance-none  items-center justify-center whitespace-nowrap rounded-md px-3 py-3 font-medium text-text-5 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none  disabled:opacity-50 data-[selected]:bg-surface-2 data-[selected]:text-text",
    content:
      "focus-visible:ring-ring mt-4 p-4 focus-visible:outline-none focus-visible:ring-2",
    indicator: "-bottom-1 h-1 bg-primary",
  },
});
