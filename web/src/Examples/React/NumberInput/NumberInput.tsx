import { numberInputPotion } from "@/components/base/numberInputPotion";
import {
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputField,
  NumberInputIncrementTrigger,
  NumberInput as NumberInputRoot,
  NumberInputScrubber,
} from "@ark-ui/react";
import { ChevronDown, ChevronUp } from "lucide-react";

const { root, control, field, decrementTrigger, incrementTrigger } =
  numberInputPotion();

export const NumberInput = () => {
  return (
    <NumberInputRoot min={-50} max={50} defaultValue="42" className={root()}>
      <NumberInputScrubber />
      <NumberInputField className={field()} />
      <NumberInputControl className={control()}>
        <NumberInputIncrementTrigger className={incrementTrigger()}>
          <ChevronUp />
        </NumberInputIncrementTrigger>
        <NumberInputDecrementTrigger className={decrementTrigger()}>
          <ChevronDown />
        </NumberInputDecrementTrigger>
      </NumberInputControl>
    </NumberInputRoot>
  );
};
