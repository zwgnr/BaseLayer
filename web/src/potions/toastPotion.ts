import { VariantProps, tv } from "tailwind-variants";

export const toastPotion = tv({
  slots: {
    root: "min-w-56 rounded-xl border bg-surface p-4 shadow-lg",
    group: "p-4",
    title: "text-sm font-semibold text-text",
    description: "text-sm text-text-2",
  },
  variants: {
    intent: {
      base: {
        root: "border-none bg-accent",
        title: "text-white",
        description: "text-white",
      },
      success: {
        root: "border-none bg-positive",
        title: "text-black",
        description: "text-black",
      },
      alert: {
        root: "border-none bg-warning",
        title: "text-black",
        description: "text-black",
      },
      error: {
        root: "border-none bg-critical",
        title: "text-black",
        description: "text-black",
      },
    },
  },
  defaultVariants: {
    intent: "base",
  },
});

export type ToastPotionProps = VariantProps<typeof toastPotion>;
