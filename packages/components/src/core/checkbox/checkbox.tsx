"use client";

import type { ReactNode } from "react";

import {
	type CheckboxProps as AriaCheckBoxProps,
	Checkbox as AriaCheckbox,
	CheckboxGroup as AriaCheckboxGroup,
	type CheckboxGroupProps as AriaCheckboxGroupProps,
	FieldError,
	Text,
	type ValidationResult,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

import { Check } from "lucide-react";

const checkbox = tv({
	base: "flex items-center justify-center gap-2 py-1 [&>div]:ring-focus [&>div]:ring-offset-2 [&>div]:ring-offset-surface [&>div]:data-[selected]:border-primary [&>div]:data-[selected]:bg-primary [&>div]:data-[focus-visible]:ring-2",
});

const checkboxGroup = tv({
	base: "flex flex-col gap-2",
});

type CheckboxVariantProps = VariantProps<typeof checkbox>;

interface CheckboxProps extends CheckboxVariantProps, AriaCheckBoxProps {
	className?: string;
	children: ReactNode;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

const Checkbox = ({
	className,
	errorMessage,
	children,
	description,
	...props
}: CheckboxProps) => {
	return (
		<AriaCheckbox className={checkbox({ className })} {...props}>
			{({ isSelected }) => (
				<>
					<div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-border transition-all">
						{isSelected && <Check />}
					</div>
					{children}
					{description && (
						<Text className="text-sm" slot="description">
							{description}
						</Text>
					)}
					<FieldError className="text-danger text-sm">
						{errorMessage}
					</FieldError>
				</>
			)}
		</AriaCheckbox>
	);
};

interface CheckboxGroupProps extends AriaCheckboxGroupProps {
	className?: string;
	label?: string;
	children: ReactNode;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

const CheckboxGroup = ({
	className,
	label,
	description,
	errorMessage,
	children,
	...props
}: CheckboxGroupProps) => (
	<AriaCheckboxGroup {...props} className={checkboxGroup({ className })}>
		{label && <Text className="text-md" slot="label">{label}</Text>}
		{children}
		{description && (
			<Text className="text-md" slot="description">
				{description}
			</Text>
		)}
		<FieldError className="text-danger text-sm">{errorMessage}</FieldError>
	</AriaCheckboxGroup>
);

export { Checkbox, CheckboxGroup };
export type { CheckboxProps, CheckboxGroupProps };