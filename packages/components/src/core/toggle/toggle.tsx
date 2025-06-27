"use client";

import { ToggleButton, type ToggleButtonProps } from "react-aria-components";
import { tv } from "tailwind-variants";

const toggle = tv({
	base: "inline-flex appearance-none items-center justify-center rounded-full bg-surface-2 px-4 py-2 font-medium outline-none ring-focus ring-offset-2 ring-offset-surface transition-transform duration-100 disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-primary aria-pressed:text-primary-fg data-[focus-visible]:ring-2",
});

interface ToggleProps extends Omit<ToggleButtonProps, "className"> {
	className?: string;
}

const Toggle = ({ className, children, ...props }: ToggleProps) => (
	<ToggleButton className={toggle({ className })} {...props}>
		{children}
	</ToggleButton>
);

export { Toggle };
export type { ToggleProps };
