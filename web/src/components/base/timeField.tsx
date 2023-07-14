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

export const timeField = tv({
  slots: {
    input:
      "min-w-sm flex w-fit whitespace-nowrap rounded-xl border p-2 outline-none",
    segmentStyles:
      "rounded-xl p-2 text-end outline-none focus:bg-secondary focus:text-secondary-fg",
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
  <AriaTimeField {...props}>
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
