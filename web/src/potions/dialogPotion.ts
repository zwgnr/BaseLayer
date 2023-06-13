import { tv } from "tailwind-variants";

export const dialogPotion = tv({
  slots: {
    backdrop: "fixed inset-0 z-40 bg-slate-700/50",
    container: "fixed inset-0 z-40 flex items-center justify-center",
    content: "min-w-80 relative z-50 w-80 rounded-xl bg-surface shadow-lg",
    description: "text-sm text-text-5",
    title: "text-lg font-bold text-text",
  },
});
