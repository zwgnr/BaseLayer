import type { DatePickerProps as AriaDatePickerProps } from "react-aria-components";

import {
  DatePicker as AriaDatePicker,
  Button,
  DateInput,
  DateSegment,
  DateValue,
  Dialog,
  Group,
  Label,
  Popover,
  Text,
} from "react-aria-components";

import { Calendar } from "@/components/base/calendar";
import { ChevronDown } from "lucide-react";

import { tv } from "tailwind-variants";

const datePicker = tv({
  slots: {
    group:
      "relative flex w-fit  items-center rounded-md border bg-surface shadow-lg",
    iconButton:
      "appearance-none border-none bg-primary p-0 align-middle text-primary-fg outline-none",
    input:
      "flex w-fit whitespace-nowrap rounded-md border-2 border-transparent bg-transparent py-2 pl-2 pr-12 focus-within:border-secondary",
    inputButton:
      "absolute right-2 flex appearance-none items-center justify-center rounded-md border-0 outline-none hover:bg-surface-2",
    dateSegment:
      "rounded-md p-1 pr-2 text-end focus:bg-secondary focus:text-secondary-fg focus:outline-none",
    popover:
      "overflow-auto [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut",
  },
});

const { group, input, inputButton, dateSegment, popover } = datePicker();

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
  label?: string;
  description?: string;
  error?: string;
}

export const DatePicker = <T extends DateValue>({
  className,
  label,
  description,
  error,
  children,
  ...props
}: DatePickerProps<T>) => (
  <AriaDatePicker className={className} {...props}>
    <Label className="text-sm">{label}</Label>
    <Group className={group()}>
      <DateInput className={input()}>
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
        <Calendar />
      </Dialog>
    </Popover>
  </AriaDatePicker>
);
