import { tv } from "tailwind-variants";

export const tabsPotion = tv({
  slots: {
    tabsList:
      "bg-muted text-muted-foreground relative inline-flex h-10 items-center justify-center rounded-md",
    tabsTrigger:
      "text-md ring-offset-background focus-visible:ring-ring data-[selected]:bg-background data-[selected]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:shadow-sm",
    tabsContent:
      "ring-offset-background focus-visible:ring-ring mt-4 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    tabsIndicator: "-bottom-1 h-1 bg-primary",
  },
});
