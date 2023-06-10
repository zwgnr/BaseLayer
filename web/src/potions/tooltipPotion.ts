import { tv } from "tailwind-variants";

export const tooltipPotion = tv({
  slots: {
    tooltipPositioner: "rounded-lg bg-surface-3 px-3 py-2 shadow-lg",
    tooltipContent: "text-xs font-semibold",
  },
});
