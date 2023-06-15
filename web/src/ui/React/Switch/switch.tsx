import {
  Switch as ArkSwitch,
  SwitchControl,
  SwitchInput,
  SwitchLabel,
  SwitchThumb,
  type SwitchProps as ArkSwitchProps,
} from "@ark-ui/react";

import { switchPotion, type SwitchPotionProps } from "@/potions/switchPotion";
import type { ReactNode } from "react";

type SwitchProps = ArkSwitchProps &
  SwitchPotionProps & {
    children?: ReactNode;
  };

export const Switch = ({ children, intent, size, ...props }: SwitchProps) => {
  const { root, control, thumb } = switchPotion({
    intent,
    size,
  });

  return (
    <ArkSwitch className={root()} {...props}>
      <SwitchInput />
      <SwitchControl className={control()}>
        <SwitchThumb className={thumb()} />
      </SwitchControl>
      {children ? <SwitchLabel>{children}</SwitchLabel> : null}
    </ArkSwitch>
  );
};
