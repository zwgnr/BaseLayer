import { ElementRef, forwardRef } from "react";
import type { CheckboxGroupProps as AriaCheckboxGroupProps } from "react-aria-components";
import {
  CheckboxGroup as AriaCheckboxGroup,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const checkboxGroup = tv({
  base: "flex flex-col gap-2 items-start",
});

interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, "className" | "children"> {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  description?: string;
  error?: string;
}

export const CheckboxGroup = forwardRef<
  ElementRef<typeof AriaCheckboxGroup>,
  CheckboxGroupProps
>(({ className, label, description, error, children, ...props }, ref) => (
  <AriaCheckboxGroup
    ref={ref}
    {...props}
    className={checkboxGroup({ className })}
  >
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
));
