"use client";

import type { ReactNode } from "react";

import {
	ToggleButton,
	ToggleButtonGroup,
	type ToggleButtonGroupProps,
	type ToggleButtonProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const toggle = tv({
	base: "inline-flex appearance-none items-center justify-center rounded-full bg-surface-2 px-4 py-1 font-medium outline-none ring-focus ring-offset-2 ring-offset-surface transition-transform duration-100 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-primary data-[selected]:text-primary-fg data-[focus-visible]:ring-2",
});

const toggleGroup = tv({
	base: "flex min-h-11 gap-1 rounded-full border border-border bg-surface-2 p-1",
});

interface ToggleProps extends Omit<ToggleButtonProps, "className"> {
	className?: string;
}

const Toggle = ({ className, children, ...props }: ToggleProps) => (
	<ToggleButton className={toggle({ className })} {...props}>
		{children}
	</ToggleButton>
);

interface ToggleGroupProps extends ToggleButtonGroupProps {
	className?: string;
	children: ReactNode;
}

const ToggleGroup = ({ className, children, ...props }: ToggleGroupProps) => (
	<ToggleButtonGroup {...props} className={toggleGroup({ className })}>
		{children}
	</ToggleButtonGroup>
);

export { Toggle, ToggleGroup };
export type { ToggleProps, ToggleGroupProps };
