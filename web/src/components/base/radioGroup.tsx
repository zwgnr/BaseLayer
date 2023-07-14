import type { RadioGroupProps, RadioProps } from "react-aria-components";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const radioGroup = tv({
  slots: {
    radio:
      "flex items-center gap-2 before:border-fg-3 before:block before:rounded-full [&[data-selected]]:before:border-primary [&[data-selected]]:before:border-4   before:w-4 before:h-4 before:border before:transition-all text-fg",
    group: "flex flex-col gap-4",
  },
});

const { group, radio } = radioGroup();

interface MyRadioGroupProps extends Omit<RadioGroupProps, "children"> {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string;
}

export function RadioGroup({
  className,
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyRadioGroupProps) {
  return (
    <AriaRadioGroup className={group({ className })} {...props}>
      {label}
      {children}
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaRadioGroup>
  );
}

export function Radio({
  children,
  className,
  ...props
}: RadioProps & {
  className?: string;
}) {
  return (
    <AriaRadio className={radio({ className })} {...props}>
      {children}
    </AriaRadio>
  );
}
