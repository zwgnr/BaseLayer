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
    gridHeaderCell: "pb-2 text-fg-muted text-sm",
    monthButton:
      "flex appearance-none items-center justify-center rounded-full p-2 text-center outline-none ring-focus data-[hovered]:bg-surface-2 data-[focus-visible]:ring-2",
    cell: "flex h-9 w-9 cursor-default items-center justify-center rounded-full text-center text-sm outline-none ring-focus data-[hovered]:bg-surface-2 data-[pressed]:bg-surface-2 data-[selected]:bg-primary data-[selected]:text-primary-fg data-[unavailable]:text-fg-muted data-[unavailable]:line-through data-[focus-visible]:ring-2 [&[data-outside-month]]:hidden",
  },
});

const { root, header, heading, gridHeaderCell, cell, monthButton } = calendar();

interface CalendarProps<T extends DateValue>
  extends Omit<AriaCalendarProps<T>, "className"> {
  error?: string;
  className?: string;
}

const Calendar = ({
  className,
  error,
  ...props
}: CalendarProps<DateValue>) => (
  <AriaCalendar {...props} className={root({ className })}>
    <header className={header()}>
      <Button className={monthButton()} slot="previous">
        <ChevronLeft className="h-5 w-5 self-center" />
      </Button>
      <Heading className={heading()} slot="label" />
      <Button className={monthButton()} slot="next">
        <ChevronRight className="h-5 w-5 self-center" />
      </Button>
    </header>
    <CalendarGrid>
      <CalendarGridHeader>
        {(day) => (
          <CalendarHeaderCell className={gridHeaderCell()}>
            {day}
          </CalendarHeaderCell>
        )}
      </CalendarGridHeader>
      <CalendarGridBody>
        {(date) => <CalendarCell className={cell()} date={date} />}
      </CalendarGridBody>
    </CalendarGrid>
    {error && <Text slot="error">{error}</Text>}
  </AriaCalendar>
);

export { Calendar };
export type { CalendarProps };