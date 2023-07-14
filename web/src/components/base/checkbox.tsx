import { Check } from "lucide-react";

import { ElementRef, forwardRef } from "react";

import {
  CheckboxProps as AriaCheckBoxProps,
  Checkbox as AriaCheckbox,
} from "react-aria-components";

import { VariantProps, tv } from "tailwind-variants";

const checkbox = tv({
  slots: {
    root: "flex items-center justify-center gap-2 py-1",
    box: "flex items-center justify-center rounded-lg border transition-all duration-200",
  },
  variants: {
    size: {
      sm: { box: "h-4 w-4 rounded-md", root: "text-sm" },
      md: { box: "h-6 w-6 rounded-lg", root: "text-md" },
      lg: { box: "h-8 w-8 rounded-lg", root: "text-lg" },
    },
    selected: {
      true: { box: "border-primary bg-primary" },
    },
  },
  defaultVariants: {
    size: "md",
    selected: false,
  },
});

type CheckboxVariantProps = VariantProps<typeof checkbox>;

interface CheckBoxProps extends CheckboxVariantProps, AriaCheckBoxProps {
  className?: string;
}

export const Checkbox = forwardRef<
  ElementRef<typeof AriaCheckbox>,
  CheckBoxProps
>(({ className, size, children, ...props }, ref) => {
  return (
    <AriaCheckbox
      className={checkbox({ size }).root({ className })}
      ref={ref}
      {...props}
    >
      {({ isSelected }) => (
        <>
          <div className={checkbox({ selected: isSelected, size }).box()}>
            {isSelected && <Check />}
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  );
});

Checkbox.displayName = "Checkbox";
