import { radioGroupPotion } from "@/components/base/radioGroupPotion";
import {
  Radio,
  RadioControl,
  RadioGroup as RadioGroupRoot,
  RadioInput,
  RadioLabel,
} from "@ark-ui/react";

const { root, control, radio, radioLabel } = radioGroupPotion();

export const RadioGroup = () => {
  const options = [
    { id: "mobile", label: "Mobile" },
    { id: "web", label: "Web" },
    { id: "Native", label: "Native" },
  ];
  return (
    <RadioGroupRoot className={root()} defaultValue="mobile">
      {options.map((option, id) => (
        <Radio className={radio()} key={id} value={option.id}>
          <RadioInput />
          <RadioControl className={control()} />
          <RadioLabel className={radioLabel()}>{option.label}</RadioLabel>
        </Radio>
      ))}
    </RadioGroupRoot>
  );
};
