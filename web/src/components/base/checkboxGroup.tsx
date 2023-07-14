import type { CheckboxGroupProps as AriaCheckboxGroupProps } from "react-aria-components";

import {
  CheckboxGroup as AriaCheckboxGroup,
  Text,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const checkboxGroup = tv({
  base: "flex flex-col items-start gap-2",
});

interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, "className" | "children"> {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  description?: string;
  error?: string;
}

export const CheckboxGroup = ({
  className,
  label,
  description,
  error,
  children,
  ...props
}: CheckboxGroupProps) => (
  <AriaCheckboxGroup {...props} className={checkboxGroup({ className })}>
    {label}
    {children}
    {description && (
      <Text className="text-md" slot="description">
        {description}
      </Text>
    )}
    {error && (
      <Text className="text-md text-critical" slot="error">
        {error}
      </Text>
    )}
  </AriaCheckboxGroup>
);

CheckboxGroup.displayName = "CheckboxGroup";
