import type {
  TimeFieldProps as AriaTimeFieldProps,
  TimeValue,
} from "react-aria-components";
import {
  TimeField as AriaTimeField,
  DateInput,
  DateSegment,
  Label,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const timeField = tv({
  slots: {
    input:
      "min-w-sm flex w-fit whitespace-nowrap rounded-md border border-border p-2 outline-none ring-fg focus-within:border-transparent focus-within:ring-2",
    segmentStyles:
      "rounded-md p-1 text-end outline-none focus:bg-secondary focus:text-secondary-fg",
  },
});

const { input, segmentStyles } = timeField();

interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export const TimeField = <T extends TimeValue>({
  label,
  description,
  errorMessage,
  ...props
}: TimeFieldProps<T>) => (
  <AriaTimeField className="flex flex-col gap-2" {...props}>
    <Label>{label}</Label>
    <DateInput className={input()}>
      {(segment) => (
        <DateSegment className={segmentStyles()} segment={segment} />
      )}
    </DateInput>
    {description && <Text slot="description">{description}</Text>}
    {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
  </AriaTimeField>
);
