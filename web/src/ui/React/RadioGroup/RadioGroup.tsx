import {
  Radio,
  RadioControl,
  RadioGroup as RadioGroupRoot,
  RadioInput,
  RadioLabel,
} from "@ark-ui/react";
import { radioGroupPotion } from "@potions/radioGroupPotion";

const { radioGroupRoot, radioControl, radio, radioLabel } = radioGroupPotion();

export const RadioGroup = () => {
  const options = [
    { id: "mobile", label: "Mobile" },
    { id: "web", label: "Web" },
    { id: "Native", label: "Native" },
  ];
  return (
    <RadioGroupRoot className={radioGroupRoot()} defaultValue="mobile">
      {options.map((option, id) => (
        <Radio className={radio()} key={id} value={option.id}>
          <RadioInput />
          <RadioControl className={radioControl()} />
          <RadioLabel className={radioLabel()}>{option.label}</RadioLabel>
        </Radio>
      ))}
    </RadioGroupRoot>
  );
};
