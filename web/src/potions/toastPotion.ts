import { VariantProps, tv } from "tailwind-variants";

export const toastPotion = tv({
  slots: {
    toastRoot: "min-w-56 rounded-xl border bg-surface p-4 shadow-lg",
    toastGroup: "p-4",
    toastTitle: "text-sm font-semibold text-text",
    toastDescription: "text-sm text-text-2",
  },
  variants: {
    intent: {
      success: {
        toastRoot: "border-none bg-positive",
      },
      alert: {
        toastRoot: "bg-warning border-none",
        toastTitle: "text-black",
        toastDescription: "text-black",
      },
      error: {
        toastRoot: "bg-critical border-none",
        toastTitle: "text-black",
        toastDescription: "text-black",
      },
    },
  },
});

export type ToastPotionProps = VariantProps<typeof toastPotion>;
