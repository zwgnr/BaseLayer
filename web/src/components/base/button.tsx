import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "ring-offset-background focus-focus inline-flex appearance-none items-center justify-center rounded-md font-medium outline-none transition-transform  duration-100 focus-visible:outline-none focus-visible:ring-2 active:scale-[.97] disabled:pointer-events-none disabled:opacity-50",
  variants: {
    intent: {
      primary: "bg-primary text-primary-fg hover:bg-primary/70",
      secondary: "bg-secondary text-secondary-fg hover:bg-secondary/70",
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
      class: "border-2 border-primary bg-primary/30 hover:bg-primary",
    },
    {
      intent: "primary",
      state: "soft",
      class: "bg-primary/50 hover:bg-primary/30",
    },
    {
      intent: "primary",
      state: "outline",
      class:
        "text-primary-content border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-fg",
    },
    {
      intent: "secondary",
      state: "ghost",
      class: "border-2 border-secondary bg-secondary/30 hover:bg-secondary",
    },
    {
      intent: "secondary",
      state: "soft",
      class: "bg-secondary/50 text-secondary-fg hover:bg-secondary/30",
    },
    {
      intent: "secondary",
      state: "outline",
      class:
        "border-2 border-secondary bg-transparent text-fg hover:bg-secondary hover:text-secondary-fg",
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
