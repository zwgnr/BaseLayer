"use client";

import type { ReactNode } from "react";

import {
	DialogTrigger as AriaDialogTrigger,
	Popover as AriaPopover,
	type PopoverProps as AriaPopoverProps,
	Dialog,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const popover = tv({
	base: "data-[entering]:fade-in data-[exiting]:fade-out m-1 max-w-lg rounded-2xl border border-border bg-surface p-2 text-fg shadow-xl outline-none data-[entering]:animate-in data-[exiting]:animate-out",
});

interface DialogProps extends Omit<AriaPopoverProps, "className" | "children"> {
	children: ReactNode;
	className?: string;
}

const PopoverTrigger = AriaDialogTrigger;

const Popover = ({ children, className, ...props }: DialogProps) => (
	<AriaPopover className={popover({ className })} {...props}>
		<Dialog className="outline-none">{children}</Dialog>
	</AriaPopover>
);

export { Popover, PopoverTrigger };
