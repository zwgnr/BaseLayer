import { forwardRef, type ElementRef } from "react";

import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { VariantProps, tv } from "tailwind-variants";

export const button = tv({
  base: "ring-offset-background focus-focus inline-flex appearance-none items-center justify-center rounded-lg font-medium outline-none transition-transform  duration-100 focus-visible:outline-none focus-visible:ring-2 active:scale-[.97] disabled:pointer-events-none disabled:opacity-50",
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
      class:
        "bg-primary-200 text-primary-600 hover:bg-primary-400 hover:text-black",
    },
    {
      intent: "primary",
      state: "outline",
      class:
        "text-primary-content hover:bg-primary-500 border-2 border-primary bg-transparent hover:text-black",
    },
    {
      intent: "secondary",
      state: "ghost",
      class: "border-2 border-primary bg-primary/30 hover:bg-primary",
    },
    {
      intent: "secondary",
      state: "soft",
      class:
        "bg-primary-200 text-primary-600 hover:bg-primary-400 hover:text-black",
    },
    {
      intent: "secondary",
      state: "outline",
      class:
        "text-primary-content hover:bg-primary-500 border-2 border-secondary bg-transparent hover:text-black",
    },
  ],
  defaultVariants: {
    intent: "primary",
    state: "filled",
    size: "md",
  },
});

export interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof button> {
  className?: string | undefined;
}

export const Button = forwardRef<ElementRef<typeof AriaButton>, ButtonProps>(
  ({ className, size, intent, state, children, ...props }, ref) => {
    return (
      <AriaButton
        className={button({ className, size, intent, state })}
        ref={ref}
        {...props}
      >
        {children}
      </AriaButton>
    );
  }
);

Button.displayName = "Button";
