"use client";

import type {
	TextFieldProps as AriaTextFieldProps,
	ValidationResult,
} from "react-aria-components";
import {
	Input as AriaInput,
	TextField as AriaTextField,
	FieldError,
	Label,
	Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const input = tv({
	base: "min-h-11 appearance-none rounded-lg border border-border bg-surface px-3 py-1 text-fg outline-none ring-primary transition-all data-[disabled]:cursor-not-allowed data-[focused]:border-transparent data-[disabled]:bg-primary/10 data-[disabled]:text-fg-disabled data-[focused]:ring-2 [&::placeholder]:text-fg-muted [&::placeholder]:text-sm",
});

interface InputProps extends Omit<AriaTextFieldProps, "className"> {
	className?: string;
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
	placeholder?: string;
}

const Input = ({
	label,
	description,
	errorMessage,
	placeholder,
	className,
	...props
}: InputProps) => (
	<AriaTextField className="flex w-full flex-col gap-1" {...props}>
		{label && <Label className="text-sm">{label}</Label>}
		<AriaInput className={input({ className })} placeholder={placeholder} />
		{description && (
			<Text className="text-fg-muted text-sm" slot="description">
				{description}
			</Text>
		)}
		<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
	</AriaTextField>
);

export { Input };
export type { InputProps };
