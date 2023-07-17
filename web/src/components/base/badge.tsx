import type { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const badge = tv({
  base: "flex items-center justify-center rounded-md",
  variants: {
    intent: {
      default: "bg-surface-3",
      info: "bg-secondary text-secondary-fg",
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

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badge> {}

export const Badge = ({ className, size, intent, ...props }: BadgeProps) => (
  <div className={badge({ size, intent, className })} {...props} />
);

Badge.displayName = "Badge";
