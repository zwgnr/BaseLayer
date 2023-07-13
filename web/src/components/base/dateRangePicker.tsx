import {
  DateRangePicker as AriaDateRangePicker,
  Button,
  DateInput,
  DateSegment,
  Dialog,
  Group,
  Label,
  Popover,
} from "react-aria-components";

import { ChevronDown } from "lucide-react";
import { ElementRef, forwardRef } from "react";
import type {
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
} from "react-aria-components";
import { Text } from "react-aria-components";
import { tv } from "tailwind-variants";
import { RangeCalendar } from "./rangeCalendar";

export const dateRangePicker = tv({
  slots: {
    group: "relative flex w-fit  items-center rounded-2xl bg-surface border shadow-lg",
    iconButton:
      "appearance-none border-none bg-primary p-0 align-middle text-primary-fg outline-none",
    input:
      "flex w-fit whitespace-nowrap rounded-xl border-2 border-transparent bg-transparent py-2 pl-2 pr-12 ",
    inputButton:
      "absolute right-2 flex appearance-none items-center justify-center rounded-lg border-0 outline-none hover:bg-surface-2",
    dateSegment: "pr-2 text-end focus:outline-none focus:bg-secondary focus:text-secondary-fg rounded-xl p-1",
    popover:
      "overflow-auto [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut",
  },
});

const { group, input, inputButton, dateSegment, popover } = dateRangePicker();

interface DatePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
  label?: string;
  description?: string;
  error?: string;
}

export const DateRangePicker = forwardRef<
  ElementRef<typeof AriaDateRangePicker>,
  DatePickerProps<DateValue>
>(({ className, label, description, error, children, ...props }, ref) => (
  <AriaDateRangePicker ref={ref} className={className} {...props}>
    <Label className="text-sm">{label}</Label>
    <Group className={group()}>
      <DateInput  slot="start" className={input()}>
        {(segment) => (
          <DateSegment className={dateSegment()} segment={segment} />
        )}
      </DateInput>
      <span className="-ml-10" aria-hidden="true">–</span>
      <DateInput  slot="end" className={input()}>
        {(segment) => (
          <DateSegment className={dateSegment()} segment={segment} />
        )}
      </DateInput>
      <Button className={inputButton()}>
        <ChevronDown />
      </Button>
    </Group>
    {description && <Text className="text-sm" slot="description">{description}</Text>}
    {error && <Text slot="error">{error}</Text>}
    <Popover className={popover()}>
      <Dialog>
        <RangeCalendar />
      </Dialog>
    </Popover>
  </AriaDateRangePicker>
));
