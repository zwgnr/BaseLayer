import {
  PinInputControl,
  PinInputField,
  PinInputLabel,
  PinInput as PinInputRoot,
} from "@ark-ui/react";
import { pinInputPotion } from "@potions/pinInputPotion";

const { piRoot, piField, piControl, piLabel } = pinInputPotion();

export const PinInput = () => (
  <PinInputRoot
    className={piRoot()}
    placeholder="0"
    onComplete={(e) => alert(e.valueAsString)}
  >
    <PinInputLabel className={piLabel({ className: "text-xl" })}>
      Enter Pin:
    </PinInputLabel>
    <PinInputControl className={piControl()}>
      {[0, 1, 2, 3].map((id, index) => (
        <PinInputField className={piField()} key={id} index={index} />
      ))}
    </PinInputControl>
  </PinInputRoot>
);
