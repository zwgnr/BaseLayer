"use client";

import type { ReactNode } from "react";

import type {
	SelectProps as AriaSelectProps,
	ListBoxItemProps,
	ValidationResult,
} from "react-aria-components";
import {
	Select as AriaSelect,
	Autocomplete,
	Button,
	FieldError,
	Input,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	SearchField,
	SelectValue,
	Text,
	useFilter,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { CheckIcon, ChevronDown, Search} from "lucide-react";

const select = tv({
	slots: {
		group: "group flex flex-col gap-1",
		button:
			"group flex w-fit items-center justify-between gap-4 rounded-full border border-border bg-surface px-4 py-2.75 align-middle font-semibold text-fg text-sm outline-none ring-fg transition-all data-[hovered]:bg-surface-2 group-data-[focus-visible]:border-transparent group-data-[open]:bg-surface-2 group-data-[focus-visible]:ring-2",
		item: "relative m-1 flex cursor-default flex-col rounded-lg p-2 font-semibold outline-none data-[disabled]:cursor-not-allowed data-[focused]:bg-secondary data-[disabled]:text-fg-disabled",
		searchField:
			"group m-1 flex items-center rounded-lg border border-border bg-surface px-2 py-1.5",
		searchInput:
			"flex-1 bg-transparent text-fg outline-none placeholder:text-fg-muted",
		searchIcon: "mr-2 size-4 text-fg-muted",
		clearButton:
			"ml-2 rounded p-0.5 text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg group-empty:invisible",
		popover: "min-w-[var(--trigger-width)] rounded-xl border border-border/25 bg-surface p-1 text-fg shadow-lg outline-none",
	},
});

const styles = select();

interface SelectProps<T extends ListBoxItemProps>
	extends Omit<AriaSelectProps<T>, "className"> {
	className?: string;
	popoverClassName?: string;
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

const Select = <T extends ListBoxItemProps>({
	label,
	className,
	description,
	errorMessage,
	popoverClassName,
	children,
	...props
}: SelectProps<T>) => (
	<AriaSelect
		className={styles.group()}
		{...props}
	>
		{label && <Label className="text-sm">{label}</Label>}
		<Button className={styles.button({ className })}>
			<SelectValue className="data-[placeholder]:text-fg-muted" />
			<ChevronDown className="size-4 text-fg-muted group-data-[open]:rotate-180 group-data-[focused]:text-fg" />
		</Button>
		{description && (
			<Text className="text-fg-muted text-sm" slot="description">
				{description}
			</Text>
		)}
		<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
		<Popover className={styles.popover({ className: popoverClassName })}>
			<ListBox className="outline-none">{children}</ListBox>
		</Popover>
	</AriaSelect>
);

interface SelectItemProps
	extends Omit<ListBoxItemProps, "className" | "children"> {
	children: ReactNode;
	className?: string;
}

const SelectItem = ({ className, ...props }: SelectItemProps) => (
	<ListBoxItem {...props} className={styles.item({ className })}>
		{({ isSelected }) => (
			<div className="flex items-center justify-between gap-2">
				<span>{props.children}</span>
				{isSelected && <CheckIcon className="size-4" />}
			</div>
		)}
	</ListBoxItem>
);

interface SearchableSelectProps<T extends ListBoxItemProps> extends SelectProps<T> {
	searchPlaceholder?: string;
}

const SearchableSelect = <T extends ListBoxItemProps>({
	label,
	className,
	description,
	errorMessage,
	searchPlaceholder = "Search...",
	children,
	popoverClassName,
	...props
}: SearchableSelectProps<T>) => {
	const { contains } = useFilter({ sensitivity: "base" });

	return (
		<AriaSelect
			className={styles.group({ className })}
			{...props}
		>
			{label && <Label className="text-sm">{label}</Label>}
			<Button className={styles.button()}>
				<SelectValue className="data-[placeholder]:text-fg-muted" />
				<ChevronDown className="size-4 text-fg-muted group-data-[focused]:rotate-90 group-data-[focused]:text-fg" />
			</Button>
			{description && (
				<Text className="text-fg-muted text-sm" slot="description">
					{description}
				</Text>
			)}
			<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
			<Popover className={styles.popover({ className: popoverClassName })}>
				<Autocomplete filter={contains}>
					<SearchField
						aria-label="Search"
						autoFocus
						className={styles.searchField()}
					>
						<Search className={styles.searchIcon()} />
						<Input
							placeholder={searchPlaceholder}
							className={styles.searchInput()}
						/>
					</SearchField>
					<ListBox className="max-h-48 overflow-auto outline-none">
						{children}
					</ListBox>
				</Autocomplete>
			</Popover>
		</AriaSelect>
	);
};

export { Select, SelectItem, SearchableSelect };
export type { SelectProps, SelectItemProps, SearchableSelectProps };
