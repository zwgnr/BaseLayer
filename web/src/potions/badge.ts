import { styled } from "@/lib/twc";
import { pv } from "@/lib/split";
import { VariantProps, tv } from "tailwind-variants";

export const badge = tv({
  base: "flex items-center justify-center rounded-xl",
  variants: {
    intent: {
      default: "bg-surface-3",
      info: "bg-accent",
      alert: "bg-critical",
    },
    size: {
      sm: "h-6 px-2 py-1 text-sm",
      md: "h-8 px-4 py-1 text-base",
      lg: "h-10 px-6 py-2 text-lg",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "md",
  },
});

export type BadgePotionProps = VariantProps<typeof badge>;

export const pbadge = styled("span", {
  base: "flex items-center justify-center rounded-xl",
  variants: {
    intent: {
      default: "bg-surface-3",
      info: "bg-accent",
      alert: "bg-critical",
    },
    size: {
      sm: "h-6 px-2 py-1 text-sm",
      md: "h-8 px-4 py-1 text-base",
      lg: "h-10 px-6 py-2 text-lg",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "md",
  },
});
