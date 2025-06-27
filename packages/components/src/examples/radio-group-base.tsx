import { Radio, RadioGroup } from "../core/radio-group/radio-group";

export const RadioExample = () => (
  <RadioGroup label="Choose your preferred contact method:" defaultValue="email">
    <Radio value="email">Email</Radio>
    <Radio value="phone">Phone Call</Radio>
    <Radio value="sms">Text Message</Radio>
  </RadioGroup>
); 