"use client";

import type {
	DatePickerProps as AriaDatePickerProps,
	DateRangePickerProps as AriaDateRangePickerProps,
} from "react-aria-components";
import {
	DatePicker as AriaDatePicker,
	DateRangePicker as AriaDateRangePicker,
	Button,
	DateInput,
	DateSegment,
	type DateValue,
	Dialog,
	FieldError,
	Group,
	Label,
	Popover,
	Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { ChevronDown } from "lucide-react";

import { Calendar, RangeCalendar } from "@/components/ui/calendar/calendar";

const baseStyles = tv({
	slots: {
		input:
			"appearance-none rounded-lg px-3 py-1.5 outline-none ring-primary transition-all",
		popover:
			"overflow-auto rounded-2xl data-[entering]:animate-fade data-[exiting]:animate-fadeOut",
	},
});

const datePicker = tv({
	extend: baseStyles,
	slots: {
		group:
			"relative flex min-h-11 w-auto min-w-48 items-center rounded-lg border border-border bg-surface transition-all data-[focus-within]:border-transparent data-[focus-within]:bg-surface data-[focus-within]:ring-2 data-[focus-within]:ring-primary data-[focus-within]:ring-offset-surface",
		dateSegment:
			"min-w-16 rounded-md p-1 text-end outline-none focus:bg-primary focus:text-primary-fg data-[placeholder]:text-fg-muted data-[type='literal']:text-fg-muted data-[placeholder]:focus:text-primary-fg",
	},
});

const dateRangePicker = tv({
	extend: baseStyles,
	slots: {
		group:
			"relative flex min-h-11 w-full flex-wrap items-center rounded-lg border border-border bg-surface transition-all data-[focus-within]:border-transparent data-[focus-within]:bg-surface data-[focus-within]:ring-2 data-[focus-within]:ring-primary data-[focus-within]:ring-offset-surface",
		dateSegment:
			"rounded-md p-1 text-end outline-none focus:bg-primary focus:text-primary-fg data-[placeholder]:text-fg-muted data-[type='literal']:text-fg-muted data-[placeholder]:focus:text-primary-fg",
		separator: "px-2 text-fg-muted",
	},
});

const styles = datePicker();
const rangeStyles = dateRangePicker();

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
	label?: string;
	description?: string;
	errorMessage?: string;
}

const DatePicker = <T extends DateValue>({
	className,
	label,
	description,
	errorMessage,
	children,
	...props
}: DatePickerProps<T>) => (
	<AriaDatePicker className="flex flex-col gap-1" {...props}>
		{label && <Label className="text-sm">{label}</Label>}
		<Group className={styles.group()}>
			<DateInput className={styles.input()}>
				{(segment) => (
					<DateSegment className={styles.dateSegment()} segment={segment} />
				)}
			</DateInput>
			<Button className="absolute right-2 w-6 rounded-xs outline-offset-0">
				<ChevronDown className="size-4 text-fg-muted" />
			</Button>
		</Group>
		{description && (
			<Text className="text-fg-muted text-sm" slot="description">
				{description}
			</Text>
		)}
		<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
		<Popover className={styles.popover()}>
			<Dialog>
				<Calendar />
			</Dialog>
		</Popover>
	</AriaDatePicker>
);

interface DateRangePickerProps<T extends DateValue>
	extends AriaDateRangePickerProps<T> {
	label?: string;
	description?: string;
	errorMessage?: string;
	className?: string;
}

const DateRangePicker = <T extends DateValue>({
	className,
	label,
	description,
	errorMessage,
	children,
	...props
}: DateRangePickerProps<T>) => (
	<AriaDateRangePicker className="flex w-full flex-col gap-1" {...props}>
		{label && <Label className="text-sm">{label}</Label>}
		<Group className={rangeStyles.group({ className })}>
			<DateInput slot="start" className={rangeStyles.input()}>
				{(segment) => (
					<DateSegment
						className={rangeStyles.dateSegment()}
						segment={segment}
					/>
				)}
			</DateInput>
			<span className={rangeStyles.separator()} aria-hidden="true">
				–
			</span>
			<DateInput slot="end" className={rangeStyles.input()}>
				{(segment) => (
					<DateSegment
						className={rangeStyles.dateSegment()}
						segment={segment}
					/>
				)}
			</DateInput>
			<Button className="absolute right-2 w-6 rounded-xs outline-offset-0">
				<ChevronDown className="size-4 text-fg-muted" />
			</Button>
		</Group>
		{description && (
			<Text className="text-fg-muted text-sm" slot="description">
				{description}
			</Text>
		)}
		<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
		<Popover className={rangeStyles.popover()}>
			<Dialog>
				<RangeCalendar />
			</Dialog>
		</Popover>
	</AriaDateRangePicker>
);

export { DatePicker, DateRangePicker };
export type { DatePickerProps, DateRangePickerProps };
