"use client";

import type { ReactNode } from "react";

import {
	ComboBox as AriaComboBox,
	type ComboBoxProps as AriaComboBoxProps,
	Button,
	FieldError,
	Input,
	Label,
	ListBox,
	ListBoxItem,
	type ListBoxItemProps,
	Popover,
	Text,
	type ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { CheckIcon, ChevronsUpDown } from "lucide-react";

const combobox = tv({
	slots: {
		root: "group max-h-inherit w-full overflow-auto p-1 outline-none",
		input:
			"w-full rounded-lg border border-border bg-surface px-4 py-1.5 align-middle font-semibold text-fg outline-none ring-fg transition-all group-data-[focused]:border-transparent group-data-[focused]:bg-surface group-data-[focused]:ring-2",
		button:
			"absolute right-2 flex appearance-none items-center justify-center rounded-full border-0 outline-none ring-focus ring-offset-2 ring-offset-surface data-[focus-visible]:ring-2",
		popover:
			"w-[var(--trigger-width)] rounded-xl border border-border/25 bg-surface p-1 text-fg shadow-lg outline-none",
		item: "relative m-1 flex cursor-default flex-col rounded-lg p-2 font-semibold outline-none data-[disabled]:cursor-not-allowed data-[focused]:bg-secondary data-[disabled]:text-fg-disabled",
	},
});

const styles = combobox();

interface ComboBoxProps<T extends ListBoxItemProps>
	extends Omit<AriaComboBoxProps<T>, "className"> {
	className?: string;
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

const ComboBox = <T extends ListBoxItemProps>({
	label,
	className,
	description,
	errorMessage,
	children,
	...props
}: ComboBoxProps<T>) => (
	<AriaComboBox
		{...props}
		className={styles.root({ className })}
	>
		{label && <Label className="text-sm">{label}</Label>}
		<div className="relative flex w-full items-center rounded-2xl bg-surface">
			<Input className={styles.input()} />
			<Button className={styles.button()}>
				<ChevronsUpDown className="size-5 text-fg-muted group-data-[focused]:text-fg" />
			</Button>
		</div>
		{description && (
			<Text className="text-fg-muted text-sm" slot="description">
				{description}
			</Text>
		)}
		<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
		<Popover className={styles.popover()}>
			<ListBox className="max-h-56 overflow-y-auto">{children}</ListBox>
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
export type { ComboBoxProps, ListBoxItemProps as ComboBoxItemProps };