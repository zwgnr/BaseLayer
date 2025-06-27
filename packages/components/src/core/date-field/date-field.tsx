"use client";

import type {
	DateFieldProps as AriaDateFieldProps,
	DateValue,
} from "react-aria-components";
import {
	DateField as AriaDateField,
	DateInput,
	DateSegment,
	FieldError,
	Label,
	Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const dateField = tv({
	slots: {
		input:
			"min-w-48 appearance-none rounded-xl bg-surface-2 px-3 py-1.5 font-semibold outline-none ring-primary transition-all disabled:bg-surface-disabled disabled:text-fg-disabled data-[disabled]:cursor-not-allowed data-[focus-within]:border-transparent data-[focus-within]:bg-surface data-[focus-within]:ring-2 [&::placeholder]:text-sm",
		segmentStyles:
			"rounded-md p-1 text-end outline-none focus:bg-primary focus:text-primary-fg data-[type='literal']:font-semibold data-[placeholder]:text-fg-muted data-[type='literal']:text-fg-muted",
	},
});

const styles = dateField();

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
	label?: string;
	description?: string;
	errorMessage?: string;
}

const DateField = <T extends DateValue>({
	label,
	description,
	errorMessage,
	...props
}: DateFieldProps<T>) => (
	<AriaDateField className="flex flex-col gap-2" {...props}>
		{label && <Label className="text-sm">{label}</Label>}
		<DateInput className={styles.input()}>
			{(segment) => (
				<DateSegment className={styles.segmentStyles()} segment={segment} />
			)}
		</DateInput>
		{description && <Text slot="description">{description}</Text>}
		<FieldError className="text-critical text-sm">{errorMessage}</FieldError>
	</AriaDateField>
);

export { DateField };
export type { DateFieldProps };
