import {
  DatePicker as AriaDatePicker,
  Button,
  DateInput,
  DateSegment,
  Dialog,
  Group,
  Label,
  Popover,
} from "react-aria-components";

import { Calendar } from "@/components/base/calendar";
import { ChevronDown } from "lucide-react";
import { ElementRef, forwardRef } from "react";
import type {
  DatePickerProps as AriaDatePickerProps,
  DateValue,
} from "react-aria-components";
import { Text } from "react-aria-components";
import { tv } from "tailwind-variants";

export const datePicker = tv({
  slots: {
    group: "relative flex w-fit  items-center rounded-2xl bg-surface border shadow-lg",
    iconButton:
      "appearance-none border-none bg-primary p-0 align-middle text-primary-fg outline-none",
    input:
      "flex w-fit whitespace-nowrap rounded-xl border-2 border-transparent bg-transparent py-2 pl-2 pr-12 focus-within:border-secondary",
    inputButton:
      "absolute right-2 flex appearance-none items-center justify-center rounded-lg border-0 outline-none hover:bg-surface-2",
    dateSegment: "pr-2 text-end focus:outline-none",
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

export const DatePicker = forwardRef<
  ElementRef<typeof AriaDatePicker>,
  DatePickerProps<DateValue>
>(({ className, label, description, error, children, ...props }, ref) => (
  <AriaDatePicker ref={ref} className={className} {...props}>
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
    {description && <Text className="text-sm" slot="description">{description}</Text>}
    {error && <Text slot="error">{error}</Text>}
    <Popover className={popover()}>
      <Dialog>
        <Calendar />
      </Dialog>
    </Popover>
  </AriaDatePicker>
));
