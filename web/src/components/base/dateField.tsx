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

export const dateField = tv({
  slots: {
    input: "min-w-sm flex w-fit whitespace-nowrap rounded-xl border p-2 outline-none",
    segmentStyles: "p-2 text-end focus:bg-secondary outline-none focus:text-secondary-fg rounded-xl",
  },
});

const { input, segmentStyles } = dateField();

interface MyDateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: MyDateFieldProps<T>) {
  return (
    <AriaDateField {...props}>
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
}
