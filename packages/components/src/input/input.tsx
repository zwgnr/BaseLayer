"use client";

import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import {
	Input as AriaInput,
	TextField as AriaTextField,
	Label,
	Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const meta = {
	category: "forms",
	status: "stable",
	description: "Allows a user to enter a plain text value with a keyboard.",
	tags: ["form", "interactive"],
	version: "2.0.0",
} as const;

const input = tv({
	base: "appearance-none rounded-xl bg-surface-2 px-3 py-1.5 font-semibold shadow-xs outline-none ring-primary transition-all disabled:bg-surface-disabled disabled:text-fg-disabled disabled:shadow-none data-[disabled]:cursor-not-allowed data-[focused]:border-transparent data-[focused]:ring-2 [&::placeholder]:text-sm",
});

interface InputProps extends Omit<AriaTextFieldProps, "className"> {
	className?: string;
	label?: string;
	description?: string;
	errorMessage?: string;
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
	<AriaTextField className="flex flex-col gap-1" {...props}>
		{label && <Label className="text-sm">{label}</Label>}
		<AriaInput className={input({ className })} placeholder={placeholder} />
		{description && <Text slot="description">{description}</Text>}
		{errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
	</AriaTextField>
);

export { Input };
export type { InputProps };
