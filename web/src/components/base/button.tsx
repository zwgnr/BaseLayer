import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex appearance-none items-center justify-center rounded-md font-medium outline-none ring-focus ring-offset-2 ring-offset-surface transition-transform duration-100 disabled:pointer-events-none disabled:opacity-50 data-[pressed]:scale-[.97] data-[hovered]:bg-primary/70 data-[focus-visible]:ring-2",
  variants: {
    intent: {
      primary: "bg-primary text-primary-fg data-[hovered]:bg-primary/70",
      secondary:
        "bg-secondary text-secondary-fg data-[hovered]:bg-secondary/70",
    },
    state: {
      filled: "",
      ghost: "",
      soft: "",
      outline: "",
    },
    size: {
      sm: "h-8 px-2 text-sm",
      md: "text-md h-10 px-4",
      lg: "h-12 px-6 text-lg",
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      state: "ghost",
      class:
        "border-2 border-primary bg-primary/30 text-fg data-[hovered]:bg-primary",
    },
    {
      intent: "primary",
      state: "soft",
      class: "bg-primary/50 data-[hovered]:bg-primary/30",
    },
    {
      intent: "primary",
      state: "outline",
      class:
        "text-primary-content border-2 border-primary bg-transparent data-[hovered]:bg-primary data-[hovered]:text-primary-fg",
    },
    {
      intent: "secondary",
      state: "ghost",
      class:
        "border-2 border-secondary bg-secondary/30 data-[hovered]:bg-secondary",
    },
    {
      intent: "secondary",
      state: "soft",
      class: "bg-secondary/50 text-secondary-fg data-[hovered]:bg-secondary/30",
    },
    {
      intent: "secondary",
      state: "outline",
      class:
        "border-2 border-secondary bg-transparent text-fg data-[hovered]:bg-secondary data-[hovered]:text-secondary-fg",
    },
  ],
  defaultVariants: {
    intent: "primary",
    state: "filled",
    size: "md",
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

interface ButtonProps extends AriaButtonProps, ButtonVariantProps {
  className?: string;
}

export const Button = ({
  className,
  size,
  intent,
  state,
  children,
  ...props
}: ButtonProps) => (
  <AriaButton className={button({ className, size, intent, state })} {...props}>
    {children}
  </AriaButton>
);

Button.displayName = "Button";
