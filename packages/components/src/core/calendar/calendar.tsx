"use client";

import {
	Calendar as AriaCalendar,
	type CalendarProps as AriaCalendarProps,
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

const calendar = tv({
	slots: {
		root: "w-fit max-w-full rounded-2xl border border-border bg-surface p-4 text-fg shadow-lg",
		header: "flex w-full items-center gap-1 pb-4",
		heading: "flex-1 text-center font-bold",
		headerCell: "pb-2 text-fg-muted text-sm",
		monthButton:
			"flex appearance-none items-center justify-center rounded-full p-2 text-center outline-none ring-focus data-[hovered]:bg-surface-2 data-[focus-visible]:ring-2",
		cell: "m-0.5 flex size-9 cursor-default items-center justify-center rounded-full border-border text-center text-sm outline-focus outline-offset-2 data-[hovered]:bg-surface-2 data-[pressed]:bg-surface-2 data-[selected]:bg-primary data-[selected]:text-primary-fg data-[unavailable]:text-fg-muted data-[unavailable]:line-through data-[focus-visible]:outline-2 data-[focus-visible]:outline-focus [&[data-outside-month]]:hidden",
	},
});

const styles = calendar();

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

export { Calendar };
export type { CalendarProps };
