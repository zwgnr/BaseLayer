import { ToggleButton, ToggleButtonProps } from "react-aria-components";

import { tv } from "tailwind-variants";

const toggle = tv({
  base: "inline-flex appearance-none items-center justify-center rounded-md bg-surface-2 p-2 font-medium outline-none ring-focus ring-offset-2 ring-offset-surface transition-transform duration-100 disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-primary data-[focus-visible]:ring-2",
});

export const Toggle = ({
  className,
  children,
  ...props
}: ToggleButtonProps & { className?: string }) => (
  <ToggleButton className={toggle({ className })} {...props}>
    {children}
  </ToggleButton>
);

Toggle.displayName = "Toggle";
