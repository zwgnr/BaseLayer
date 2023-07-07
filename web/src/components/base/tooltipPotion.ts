import { tv } from "tailwind-variants";

export const tooltipPotion = tv({
  slots: {
    positioner: "rounded-lg bg-surface-3 px-3 py-2 shadow-lg",
    content: "text-xs font-semibold text-fg-3",
  },
});
