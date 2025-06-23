"use client";

import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { tv, type VariantProps } from "tailwind-variants";

export const meta = {
  category: "forms",
  status: "stable",
  description:
    "A button allows a user to perform an action, with mouse, touch, and keyboard interactions.",
  tags: ["form", "interactive"],
  version: "2.0.0",
} as const;

const button = tv({
  base: "inline-flex appearance-none items-center justify-center outline-none ring-focus ring-offset-2 ring-offset-surface transition-transform duration-100 disabled:pointer-events-none disabled:opacity-50 data-[focus-visible]:ring-2 rounded-4xl font-semibold",
  variants: {
    variant: {
      primary:
        "bg-primary text-primary-fg data-[hovered]:bg-primary/80 border border-transparent",
      secondary:
        "border border-secondary text-fg data-[hovered]:bg-secondary/80 data-[hovered]:border-secondary/80",
      ghost:
        "bg-transparent text-fg data-[hovered]:bg-secondary data-[hovered]:text-secondary-fg border border-transparent",
      danger:
        "bg-danger text-danger-fg data-[hovered]:bg-danger/80 border border-transparent",
    },
    size: {
      sm: "px-3 py-1 text-sm has-[>svg]:px-4",
      md: "px-4 py-2 text-base has-[>svg]:px-5",
      lg: "px-6 py-3 text-xl has-[>svg]:px-8",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

interface ButtonProps
  extends Omit<AriaButtonProps, "className">,
    ButtonVariantProps {
  className?: string;
}

const Button = ({
  className,
  size,
  variant,
  children,
  ...props
}: ButtonProps) => (
  <AriaButton className={button({ className, size, variant })} {...props}>
    {children}
  </AriaButton>
);

export { Button };
export type { ButtonProps };
