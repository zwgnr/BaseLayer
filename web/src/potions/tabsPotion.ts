import { tv } from "tailwind-variants";

export const tabsPotion = tv({
  slots: {
    list: "bg-muted text-muted-foreground relative inline-flex h-10 items-center justify-center rounded-md",
    trigger:
      "text-md ring-offset-background focus-visible:ring-ring data-[selected]:bg-background data-[selected]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:shadow-sm",
    content:
      "ring-offset-background focus-visible:ring-ring mt-4 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    indicator: "-bottom-1 h-1 bg-primary",
  },
});
