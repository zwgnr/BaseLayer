import { pinInputPotion } from "@/potions/pinInputPotion";
import {
  PinInputControl,
  PinInputField,
  PinInputLabel,
  PinInput as PinInputRoot,
} from "@ark-ui/react";

const { root, field, control, label } = pinInputPotion();

export const PinInput = () => (
  <PinInputRoot
    className={root()}
    placeholder="0"
    onComplete={(e) => alert(e.valueAsString)}
  >
    <PinInputLabel className={label()}>Enter Pin:</PinInputLabel>
    <PinInputControl className={control()}>
      {[0, 1, 2, 3].map((id, index) => (
        <PinInputField className={field()} key={id} index={index} />
      ))}
    </PinInputControl>
  </PinInputRoot>
);
