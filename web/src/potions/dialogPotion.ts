import { tv } from "tailwind-variants";

export const dialogPotion = tv({
  slots: {
    dialogBackdrop: "fixed inset-0 z-40 bg-slate-700/50",
    dialogContainer: "fixed inset-0 z-40 flex items-center justify-center",
    dialogContent:
      "min-w-80 relative z-50 w-80 rounded-xl bg-surface shadow-lg",
    dialogDescription: "text-sm text-gray-400",
    dialogTitle: "text-lg font-bold",
  },
});
