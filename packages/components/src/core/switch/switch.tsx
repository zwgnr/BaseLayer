"use client";

import type { ReactNode } from "react";

import {
	Switch as AriaSwitch,
	type SwitchProps as AriaSwitchProps,
	Label,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const switchStyles = tv({
	slots: {
		root: "flex items-center gap-2 transition-none duration-200 [&>div]:ring-focus [&>div]:ring-offset-2 [&>div]:ring-offset-surface [&>div]:data-[focus-visible]:ring-2",
		indicator:
			"h-6 w-10 cursor-pointer rounded-2xl bg-surface-3 duration-200 before:mx-[4px] before:mt-[4px] before:block before:size-4 before:rounded-2xl before:bg-surface before:transition-all ",
		label: "text-fg-muted text-sm",
	},
	variants: {
		selected: {
			true: { indicator: "bg-primary before:translate-x-4" },
		},
	},
	defaultVariants: {
		selected: false,
	},
});

const styles = switchStyles();

interface SwitchProps extends AriaSwitchProps {
	children?: ReactNode;
	className?: string;
}

 const Switch = ({ className, children, ...restProps }: SwitchProps) => (
	<AriaSwitch className={styles.root({ className })} {...restProps}>
		{({ isSelected }) => (
			<>
				<div
					className={styles.indicator({
						selected: isSelected,
					})}
				/>
				<Label className={styles.label()}> {children}</Label>
			</>
		)}
	</AriaSwitch>
);

export { Switch };
export type { SwitchProps };