"use client";

import type {
	TimeFieldProps as AriaTimeFieldProps,
	TimeValue,
} from "react-aria-components";
import {
	TimeField as AriaTimeField,
	DateInput,
	DateSegment,
	FieldError,
	Label,
	Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const timeField = tv({
	slots: {
		input:
			"appearance-none rounded-xl bg-surface-2 px-3 py-1.5 font-semibold outline-none ring-primary transition-all disabled:bg-surface-disabled disabled:text-fg-disabled data-[disabled]:cursor-not-allowed data-[focus-within]:border-transparent data-[focus-within]:bg-surface data-[focus-within]:ring-2 [&::placeholder]:text-sm [&::placeholder]:focus:text-primary-fg",
		segmentStyles:
			"rounded-md p-1 text-end outline-none focus:bg-primary focus:text-primary-fg data-[type='literal']:font-semibold data-[placeholder]:text-fg-muted data-[type='literal']:text-fg-muted",
	},
});

const styles = timeField();

interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
	label?: string;
	description?: string;
	errorMessage?: string;
}

const TimeField = <T extends TimeValue>({
	label,
	description,
	errorMessage,
	...props
}: TimeFieldProps<T>) => (
	<AriaTimeField className="flex w-fit min-w-36 flex-col gap-1" {...props}>
		{label && <Label className="text-sm">{label}</Label>}
		<DateInput className={styles.input()}>
			{(segment) => (
				<DateSegment className={styles.segmentStyles()} segment={segment} />
			)}
		</DateInput>
		{description && (
			<Text className="text-sm" slot="description">
				{description}
			</Text>
		)}
		<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
	</AriaTimeField>
);

export { TimeField };
export type { TimeFieldProps };
