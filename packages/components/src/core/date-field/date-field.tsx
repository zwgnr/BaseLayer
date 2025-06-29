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
			"flex min-h-11 min-w-48 appearance-none items-center rounded-lg border border-border bg-surface px-3 py-0.5 outline-none ring-primary transition-all data-[disabled]:cursor-not-allowed data-[focus-within]:border-transparent data-[disabled]:border-none data-[disabled]:bg-primary/10 data-[focus-within]:bg-surface data-[disabled]:text-fg-disabled data-[focus-within]:ring-2 [&::placeholder]:text-sm",
		segmentStyles:
			"rounded-md p-1 text-end outline-none focus:text-primary-fg data-[focused]:bg-primary data-[placeholder]:text-fg-muted data-[type='literal']:text-fg-muted data-[placeholder]:focus:text-primary-fg",
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
	<AriaDateField className="flex flex-col gap-1" {...props}>
		{label && <Label className="text-sm">{label}</Label>}
		<DateInput className={styles.input()}>
			{(segment) => (
				<DateSegment className={styles.segmentStyles()} segment={segment} />
			)}
		</DateInput>
		{description && <Text slot="description">{description}</Text>}
		<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
	</AriaDateField>
);

export { DateField };
export type { DateFieldProps };
