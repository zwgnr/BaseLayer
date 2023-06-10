import { VariantProps, tv } from "tailwind-variants";

export const toastPotion = tv({
  slots: {
    toastRoot: "min-w-56 rounded-xl border bg-surface p-4 shadow-lg",
    toastGroup: "p-4",
    toastTitle: "text-sm font-semibold",
    toastDescription: "text-sm text-text-2",
  },
  variants: {
    intent: {
      success: {
        toastRoot: "bg-positive",
      },
      alert: {
        toastRoot: "bg-warning",
      },
      error: {
        toastRoot: "bg-critical",
      },
    },
  },
});

export type ToastPotionProps = VariantProps<typeof toastPotion>;
