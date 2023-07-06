import { checkbox, type CheckboxPotionProps } from "@/potions/checkbox";
import { Check } from "lucide-react";

import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckBoxProps,
} from "react-aria-components";

interface CheckBoxProps extends AriaCheckBoxProps, CheckboxPotionProps {
  className?: string | undefined;
}

export const Checkbox = ({ size, className, children }: CheckBoxProps) => {
  const { box, root } = checkbox({ size });
  return (
    <AriaCheckbox className={root()}>
      {({ isSelected }) => (
        <>
          <div className={box({ className })}>{isSelected && <Check />}</div>
          {children}
        </>
      )}
    </AriaCheckbox>
  );
};
