"use client";

import type { ReactNode } from "react";

import {
	Tooltip as AriaTooltip,
	type TooltipProps as AriaTooltipProps,
	TooltipTrigger as AriaTooltipTrigger,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const tooltip = tv({
	base: "[&[data-entering]]:fade-in [&[data-exiting]]:fade-out m-1 max-w-sm rounded-full border border-border bg-surface px-4 py-2 text-fg shadow-xl outline-none [&[data-entering]]:animate-fade-in [&[data-exiting]]:animate-fade-out",
});

const TooltipTrigger = AriaTooltipTrigger;

interface TooltipProps extends Omit<AriaTooltipProps, "children"> {
	className?: string;
	children: ReactNode;
}

const Tooltip = ({ children, className, ...props }: TooltipProps) => (
	<AriaTooltip className={tooltip({ className })} {...props}>
		{children}
	</AriaTooltip>
);

export { Tooltip, TooltipTrigger };
