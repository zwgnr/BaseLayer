"use client";

import type {
	SelectProps as AriaSelectProps,
	ListBoxItemProps,
	ValidationResult,
} from "react-aria-components";
import {
	Select as AriaSelect,
	Button,
	FieldError,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	SelectValue,
	Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { ChevronsUpDown } from "lucide-react";

const select = tv({
	slots: {
		button:
			"flex w-full min-w-48 items-center justify-between gap-4 rounded-xl border border-border bg-surface px-3 py-1.25 align-middle font-semibold text-fg outline-none ring-fg transition-all group-data-[focused]:bg-surface group-data-[focused]:ring-2",
		item: "relative m-1 flex cursor-default flex-col rounded-lg p-2 font-semibold outline-none data-[disabled]:cursor-not-allowed data-[focused]:bg-surface-2 data-[disabled]:text-fg-disabled",
	},
});

const styles = select();

interface SelectProps<T extends ListBoxItemProps>
	extends Omit<AriaSelectProps<T>, "className"> {
	className?: string;
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

const Select = <T extends ListBoxItemProps>({
	label,
	className,
	description,
	errorMessage,
	children,
	...props
}: SelectProps<T>) => (
	<AriaSelect
		className="group flex max-h-inherit flex-col gap-1 overflow-auto p-1 outline-none"
		{...props}
	>
		{label && <Label className="text-sm">{label}</Label>}
		<Button className={styles.button()}>
			<SelectValue className="data-[placeholder]:text-fg-muted" />
			<ChevronsUpDown className="size-4 text-fg-muted group-data-[focused]:text-fg" />
		</Button>
		{description && (
			<Text className="text-fg-muted text-sm" slot="description">
				{description}
			</Text>
		)}
		<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
		<Popover className="fade-in w-[var(--trigger-width)] animate-in rounded-xl border border-border bg-surface p-1 text-fg shadow-lg outline-none duration-250">
			<ListBox className="outline-none">{children}</ListBox>
		</Popover>
	</AriaSelect>
);

const SelectItem = (props: ListBoxItemProps) => {
	return <ListBoxItem {...props} className={styles.item()} />;
};

export { Select, SelectItem };
export type { SelectProps, ListBoxItemProps as SelectItemProps };
