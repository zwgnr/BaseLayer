"use client";

import {
	Calendar as AriaCalendar,
	type CalendarProps as AriaCalendarProps,
	RangeCalendar as AriaRangeCalendar,
	type RangeCalendarProps as AriaRangeCalendarProps,
	Button,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	type DateValue,
	Heading,
	Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { ChevronLeft, ChevronRight } from "lucide-react";

const baseStyles = tv({
	slots: {
		root: "w-fit max-w-full rounded-2xl border border-border bg-surface p-4 text-fg shadow-lg",
		header: "flex w-full items-center gap-1 pb-4",
		heading: "flex-1 text-center font-bold",
		headerCell: "pb-2 text-fg-muted text-sm",
		monthButton:
			"flex appearance-none items-center justify-center rounded-full p-2 text-center outline-none ring-focus data-[hovered]:bg-surface-2 data-[focus-visible]:ring-2",
	},
});

const calendar = tv({
	extend: baseStyles,
	slots: {
		cell: "flex size-9 cursor-default items-center justify-center rounded-full border-border text-center text-sm outline-focus outline-offset-2 data-[hovered]:bg-surface-2 data-[pressed]:bg-surface-2 data-[selected]:bg-primary data-[selected]:text-primary-fg data-[unavailable]:text-fg-muted data-[unavailable]:line-through data-[focus-visible]:outline-2 data-[focus-visible]:outline-focus [&[data-outside-month]]:hidden",
	},
});

const rangeCalendar = tv({
	extend: baseStyles,
	slots: {
		cell: "flex size-9 cursor-default items-center justify-center rounded-full text-center text-sm outline-none outline-offset-2 data-[selected]:rounded-none data-[hovered]:bg-surface-2 data-[pressed]:bg-surface-2 data-[selected]:bg-primary data-[selected]:text-primary-fg data-[unavailable]:text-fg-muted data-[unavailable]:line-through data-[focus-visible]:ring-2 data-[focus-visible]:ring-focus data-[focus-visible]:ring-offset-2 [&[data-outside-month]]:hidden [&[data-selection-end]]:rounded-r-full [&[data-selection-start]]:rounded-l-full",
	},
});

const styles = calendar();
const rangeStyles = rangeCalendar();

interface CalendarProps<T extends DateValue>
	extends Omit<AriaCalendarProps<T>, "className"> {
	errorMessage?: string;
	className?: string;
}

const Calendar = ({
	className,
	errorMessage,
	...props
}: CalendarProps<DateValue>) => (
	<AriaCalendar {...props} className={styles.root({ className })}>
		<header className={styles.header()}>
			<Button className={styles.monthButton()} slot="previous">
				<ChevronLeft className="h-5 w-5 self-center" />
			</Button>
			<Heading className={styles.heading()} slot="label" />
			<Button className={styles.monthButton()} slot="next">
				<ChevronRight className="h-5 w-5 self-center" />
			</Button>
		</header>
		<CalendarGrid>
			<CalendarGridHeader>
				{(day) => (
					<CalendarHeaderCell className={styles.headerCell()}>
						{day}
					</CalendarHeaderCell>
				)}
			</CalendarGridHeader>
			<CalendarGridBody>
				{(date) => <CalendarCell className={styles.cell()} date={date} />}
			</CalendarGridBody>
		</CalendarGrid>
		{errorMessage && (
			<Text className="text-danger text-sm" slot="errorMessage">
				{errorMessage}
			</Text>
		)}
	</AriaCalendar>
);

interface RangeCalendarProps<T extends DateValue>
	extends Omit<AriaRangeCalendarProps<T>, "className"> {
	errorMessage?: string;
	className?: string;
}

const RangeCalendar = ({
	className,
	errorMessage,
	...props
}: RangeCalendarProps<DateValue>) => (
	<AriaRangeCalendar {...props} className={rangeStyles.root({ className })}>
		<header className={rangeStyles.header()}>
			<Button className={rangeStyles.monthButton()} slot="previous">
				<ChevronLeft className="h-5 w-5 self-center" />
			</Button>
			<Heading className={rangeStyles.heading()} slot="label" />
			<Button className={rangeStyles.monthButton()} slot="next">
				<ChevronRight className="h-5 w-5 self-center" />
			</Button>
		</header>
		<CalendarGrid>
			<CalendarGridHeader>
				{(day) => (
					<CalendarHeaderCell className={rangeStyles.headerCell()}>
						{day}
					</CalendarHeaderCell>
				)}
			</CalendarGridHeader>
			<CalendarGridBody>
				{(date) => <CalendarCell className={rangeStyles.cell()} date={date} />}
			</CalendarGridBody>
		</CalendarGrid>
		{errorMessage && (
			<Text className="text-danger text-sm" slot="errorMessage">
				{errorMessage}
			</Text>
		)}
	</AriaRangeCalendar>
);

export { Calendar, RangeCalendar };
export type { CalendarProps, RangeCalendarProps };
