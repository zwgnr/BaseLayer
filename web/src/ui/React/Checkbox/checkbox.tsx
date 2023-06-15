import { Check, Minus } from "lucide-react";

import { CheckboxPotionProps, checkboxPotion } from "@/potions/checkboxPotion";
import {
  CheckboxProps as ArkCheckboxProps,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
  Checkbox as CheckboxRoot,
} from "@ark-ui/react";
import type { ReactNode } from "react";

type CheckboxProps = ArkCheckboxProps &
  CheckboxPotionProps & {
    children?: ReactNode;
  };

export const Checkbox = ({ children, size }: CheckboxProps) => {
  const cp = checkboxPotion({ size });
  return (
    <CheckboxRoot className={cp.root()}>
      {(state) => (
        <div className="flex flex-row items-center gap-2">
          <CheckboxInput className="peer" />
          <CheckboxControl className={cp.control()}>
            {state.isChecked ? <Check /> : null}
            {state.isIndeterminate ? <Minus /> : null}
          </CheckboxControl>
          {children ? (
            <CheckboxLabel className={cp.label()}>{children}</CheckboxLabel>
          ) : null}
        </div>
      )}
    </CheckboxRoot>
  );
};
