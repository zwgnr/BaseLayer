import type {
  DateFieldProps as AriaDateFieldProps,
  DateValue,
} from "react-aria-components";

import {
  DateField as AriaDateField,
  DateInput,
  DateSegment,
  Label,
  Text,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const dateField = tv({
  slots: {
    input:
      "min-w-sm flex w-fit whitespace-nowrap rounded-md border border-border p-2 outline-none",
    segmentStyles:
      "rounded-md p-1 text-end outline-none focus:bg-secondary focus:text-secondary-fg",
  },
});

const { input, segmentStyles } = dateField();

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export const DateField = <T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) => (
  <AriaDateField className="flex flex-col gap-2" {...props}>
    <Label>{label}</Label>
    <DateInput className={input()}>
      {(segment) => (
        <DateSegment className={segmentStyles()} segment={segment} />
      )}
    </DateInput>
    {description && <Text slot="description">{description}</Text>}
    {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
  </AriaDateField>
);
