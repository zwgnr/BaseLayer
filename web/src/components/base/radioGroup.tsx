import type {
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps,
} from "react-aria-components";

import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  Text,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const radioGroup = tv({
  slots: {
    radio:
      "flex items-center gap-2 text-fg before:block before:h-4 before:w-4 before:rounded-full   before:border before:border-fg-3 before:transition-all [&[data-selected]]:before:border-4 [&[data-selected]]:before:border-primary",
    group: "flex flex-col gap-4",
  },
});

const { group, radio } = radioGroup();

interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string;
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
    {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
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
