import { Radio, RadioGroup } from "@/components/base/radioGroup";

export const RadioGroupExample = () => (
  <RadioGroup label="Notifications">
    <Radio value="bug">Push</Radio>
    <Radio value="copy">Text</Radio>
    <Radio value="deploy">Email</Radio>
  </RadioGroup>
);
