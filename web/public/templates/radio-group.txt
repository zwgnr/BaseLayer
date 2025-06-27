"use client";

import type { ReactNode } from "react";

import type {
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps,
  ValidationResult,
} from "react-aria-components";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  FieldError,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const radioGroup = tv({
  slots: {
    radio:
      "flex items-center gap-2 text-fg before:block before:h-5 before:w-5 before:rounded-full before:border before:border-border before:ring-focus before:ring-offset-2 before:ring-offset-surface before:transition-all data-[selected]:before:border-4 data-[selected]:before:border-primary data-[focus-visible]:before:ring-2",
    group: "flex flex-col gap-4 text-fg",
  },
});

const { group, radio } = radioGroup();

interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children" | "className"> {
  className?: string;
  children?: ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const RadioGroup = ({
  className,
  label,
  description,
  errorMessage,
  children,
  ...props
}: RadioGroupProps) => (
  <AriaRadioGroup className={group({ className })} {...props}>
    {label}
    {children}
    {description && <Text slot="description">{description}</Text>}
    <FieldError className="text-fg-error text-sm">{errorMessage}</FieldError>
  </AriaRadioGroup>
);

const Radio = ({
  children,
  className,
  ...props
}: RadioProps & {
  className?: string;
}) => (
  <AriaRadio className={radio({ className })} {...props}>
    {children}
  </AriaRadio>
);

export { RadioGroup, Radio }; 