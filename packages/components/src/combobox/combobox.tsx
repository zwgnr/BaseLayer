"use client";

import type { ReactNode } from "react";

import {
	ComboBox as AriaComboBox,
	type ComboBoxProps as AriaComboBoxProps,
	Button,
	Input,
	Label,
	ListBox,
	ListBoxItem,
	type ListBoxItemProps,
	Popover,
	Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { CheckIcon, ChevronsUpDown } from "lucide-react";

export const meta = {
	category: "forms",
	status: "stable",
	description:
		"A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.",
	tags: ["form", "interactive"],
	version: "2.0.0",
} as const;

const combobox = tv({
	slots: {
		root: "group max-h-inherit w-full overflow-auto p-1 outline-none",
		input:
			"w-full rounded-xl bg-surface-2 px-4 py-1.5 align-middle font-semibold text-fg outline-none ring-fg transition-all group-data-[focused]:ring-2",
		button:
			"absolute right-2 flex appearance-none items-center justify-center rounded-full border-0 outline-none ring-focus ring-offset-2 ring-offset-surface data-[focus-visible]:ring-2",
		popover:
			"fade-in w-[var(--trigger-width)] animate-in rounded-xl bg-surface-2 p-1 text-fg shadow-xl outline-none duration-250",
		item: "relative m-1 flex cursor-default flex-col rounded-lg p-2 font-semibold outline-none data-[disabled]:cursor-not-allowed data-[focused]:bg-surface-3 data-[disabled]:text-fg-disabled",
	},
});

const styles = combobox();

interface ComboBoxProps<T extends ListBoxItemProps>
	extends Omit<AriaComboBoxProps<T>, "children"> {
	className?: string;
	label?: string;
	description?: string;
	errorMessage?: string;
	children: ReactNode;
}

const ComboBox = <T extends ListBoxItemProps>({
	label,
	className,
	description,
	errorMessage,
	children,
	menuTrigger = "focus",
	...props
}: ComboBoxProps<T>) => (
	<AriaComboBox
		{...props}
		className={styles.root({ className })}
		menuTrigger={menuTrigger}
	>
		{label && <Label className="text-sm">{label}</Label>}
		<div className="relative flex w-full items-center rounded-2xl bg-surface">
			<Input className={styles.input()} />
			<Button className={styles.button()}>
				<ChevronsUpDown className="size-5 text-fg-muted group-data-[focused]:text-fg" />
			</Button>
		</div>
		{description && <Text slot="description">{description}</Text>}
		{errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
		<Popover className={styles.popover()}>
			<ListBox>{children}</ListBox>
		</Popover>
	</AriaComboBox>
);

interface ComboBoxItemProps
	extends Omit<ListBoxItemProps, "className" | "children"> {
	children: ReactNode;
	className?: string;
}

const ComboBoxItem = ({ className, ...props }: ComboBoxItemProps) => (
	<ListBoxItem {...props} className={styles.item({ className })}>
		{({ isSelected }) => (
			<div className="flex items-center justify-between gap-2">
				<span>{props.children}</span>
				{isSelected && <CheckIcon className="size-4" />}
			</div>
		)}
	</ListBoxItem>
);

export { ComboBox, ComboBoxItem };
