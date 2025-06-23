"use client";

import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import {
  TextField as AriaTextField,
  Input as AriaInput,
  Label,
  Text,
} from "react-aria-components";

export const meta = {
  category: "forms",
  status: "stable",
  description: "Allows a user to enter a plain text value with a keyboard.",
  tags: ["form", "interactive"],
  version: "2.0.0",
} as const;

interface InputProps extends AriaTextFieldProps {
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
  ...props
}: InputProps) => (
  <AriaTextField className="flex flex-col gap-1" {...props}>
    {label && <Label className="text-sm">{label}</Label>}
    <AriaInput
      className="m-0 disabled:bg-surface-2 disabled:border-border appearance-none rounded-lg border border-border bg-transparent px-3 py-1 outline-none ring-focus/50 focus:ring-3 [&::placeholder]:text-sm shadow-xs disabled:shadow-none transition-all"
      placeholder={placeholder}
    />
    {description && <Text slot="description">{description}</Text>}
    {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
  </AriaTextField>
);

export { Input };
export type { InputProps };
