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

import { RangeCalendar } from "@/components/base/rangeCalendar";
import { ChevronDown } from "lucide-react";
import type {
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
} from "react-aria-components";
import { Text } from "react-aria-components";
import { tv } from "tailwind-variants";

const dateRangePicker = tv({
  slots: {
    group:
      "relative flex w-fit items-center rounded-md border bg-surface shadow-lg",
    iconButton:
      "appearance-none border-none bg-primary p-0 align-middle text-primary-fg outline-none",
    input:
      "flex w-fit whitespace-nowrap rounded-md border-2 border-transparent bg-transparent py-2 pl-2 pr-12 ",
    inputButton:
      "absolute right-2 flex appearance-none items-center justify-center rounded-md border-0 outline-none hover:bg-surface-2",
    dateSegment:
      "rounded-md p-1 pr-2 text-end focus:bg-secondary focus:text-secondary-fg focus:outline-none",
    popover:
      "overflow-auto [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut",
  },
});

const { group, input, inputButton, dateSegment, popover } = dateRangePicker();

interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {
  label?: string;
  description?: string;
  error?: string;
}

export const DateRangePicker = <T extends DateValue>({
  className,
  label,
  description,
  error,
  children,
  ...props
}: DateRangePickerProps<T>) => (
  <AriaDateRangePicker className={className} {...props}>
    <Label className="text-sm">{label}</Label>
    <Group className={group()}>
      <DateInput slot="start" className={input()}>
        {(segment) => (
          <DateSegment className={dateSegment()} segment={segment} />
        )}
      </DateInput>
      <span className="-ml-10" aria-hidden="true">
        –
      </span>
      <DateInput slot="end" className={input()}>
        {(segment) => (
          <DateSegment className={dateSegment()} segment={segment} />
        )}
      </DateInput>
      <Button className={inputButton()}>
        <ChevronDown />
      </Button>
    </Group>
    {description && (
      <Text className="text-sm" slot="description">
        {description}
      </Text>
    )}
    {error && <Text slot="error">{error}</Text>}
    <Popover className={popover()}>
      <Dialog>
        <RangeCalendar />
      </Dialog>
    </Popover>
  </AriaDateRangePicker>
);
