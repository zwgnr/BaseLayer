import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Calendar as AriaCalendar,
  CalendarProps as AriaCalendarProps,
  Button,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateValue,
  Heading,
  Text,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const calendar = tv({
  slots: {
    root: "w-fit max-w-full rounded-xl border bg-surface p-6 text-fg shadow-lg",
    header: "mb-4 flex items-center ",
    heading: "text-md m-0 flex-1 text-center text-lg font-bold",
    gridHeaderCell: "pb-2 text-sm text-fg-5",
    iconButton:
      "m-0 flex h-8 w-8 appearance-none items-center justify-center rounded-xl text-center outline-none hover:bg-surface-2",
    cell: " -m-[1px] mb-1 flex h-8 w-8 items-center justify-center rounded-xl p-5 text-center text-sm outline-none hover:bg-surface-2 [&[data-outside-month]]:hidden  [&[data-pressed]]:bg-surface-2 [&[data-selected]]:bg-primary [&[data-selected]]:text-primary-fg [&[data-unavailable]]:text-fg-6 [&[data-unavailable]]:line-through",
  },
});

const { root, header, heading, gridHeaderCell, cell, iconButton } = calendar();

interface CalendarProps<T extends DateValue>
  extends Omit<AriaCalendarProps<T>, "className"> {
  error?: string;
  className?: string;
}

export const Calendar = ({
  className,
  error,
  ...props
}: CalendarProps<DateValue>) => (
  <AriaCalendar {...props} className={root({ className })}>
    <header className={header()}>
      <Button className={iconButton()} slot="previous">
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Heading className={heading()} />
      <Button className={iconButton()} slot="next">
        <ChevronRight className="h-6 w-6" />
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

Calendar.displayName = "Calendar";
