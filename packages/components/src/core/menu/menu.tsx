"use client";

import type { HTMLAttributes } from "react";

import {
	Header as AriaHeader,
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	MenuSection as AriaMenuSection,
	MenuTrigger as AriaMenuTrigger,
	type MenuItemProps,
	type MenuProps,
	Popover,
	Separator,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const menu = tv({
	slots: {
		menuPopover:
			"data-[entering]:fade-in data-[exiting]:fade-out overflow-auto rounded-2xl border border-border bg-surface shadow-xl data-[entering]:animate-in data-[exiting]:animate-out ",
		header: "p-2 font-semibold",
		content: "flex h-fit min-w-56 flex-col gap-2 p-3 outline-none",
		item: "relative flex cursor-default justify-between rounded-lg p-2 font-semibold outline-none data-[disabled]:cursor-not-allowed data-[focused]:bg-surface-2 data-[disabled]:text-fg-disabled",
		separator: "h-[1px] bg-surface-3",
	},
});

const { menuPopover, content, header, item, separator } = menu();

const MenuTrigger = AriaMenuTrigger;
const MenuSection = AriaMenuSection;

const MenuContent = <T extends object>({
	children,
	className,
	...props
}: MenuProps<T> & { className?: string }) => (
	<Popover className={menuPopover()}>
		<AriaMenu {...props} className={content({ className })}>
			{children}
		</AriaMenu>
	</Popover>
);

const MenuItem = ({
	children,
	className,
	...props
}: MenuItemProps & { className?: string }) => (
	<AriaMenuItem {...props} className={item({ className })}>
		{children}
	</AriaMenuItem>
);

const MenuHeader = ({
	children,
	className,
	...props
}: HTMLAttributes<HTMLElement> & { className?: string }) => (
	<AriaHeader {...props} className={header({ className })}>
		{children}
	</AriaHeader>
);

const MenuSeperator = ({
	className,
	...props
}: HTMLAttributes<HTMLElement> & { className?: string }) => (
	<Separator {...props} className={separator({ className })} />
);

export {
	MenuContent,
	MenuHeader,
	MenuItem,
	MenuSeperator,
	MenuTrigger,
	MenuSection,
};
