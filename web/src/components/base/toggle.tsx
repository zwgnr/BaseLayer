import { forwardRef, type ElementRef } from "react";

import { ToggleButton, ToggleButtonProps } from "react-aria-components";

import { VariantProps, tv } from "tailwind-variants";

export const toggle = tv({
  base: "ring-offset-background focus-focus inline-flex appearance-none items-center justify-center rounded-lg bg-surface-2 p-2 font-medium outline-none transition-transform  duration-100 disabled:pointer-events-none disabled:opacity-50 [&[aria-pressed=true]]:bg-primary",
});

export interface ToggleProps
  extends ToggleButtonProps,
    VariantProps<typeof toggle> {
  className?: string | undefined;
}

export const Toggle = forwardRef<ElementRef<typeof ToggleButton>, ToggleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ToggleButton className={toggle({ className })} ref={ref} {...props}>
        {children}
      </ToggleButton>
    );
  }
);

Toggle.displayName = "Toggle";
