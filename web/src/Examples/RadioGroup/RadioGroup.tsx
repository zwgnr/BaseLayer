import { Radio, RadioGroup } from "@/components/base/radioGroup";

export const RadioGroupExample = () => (
  <RadioGroup label="Favorite sport">
    <Radio value="soccer">Soccer</Radio>
    <Radio value="baseball">Baseball</Radio>
    <Radio value="basketball">Basketball</Radio>
  </RadioGroup>
);
