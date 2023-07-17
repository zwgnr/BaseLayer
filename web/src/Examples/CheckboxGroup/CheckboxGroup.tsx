import { Checkbox } from "@/components/base/checkbox";
import { CheckboxGroup } from "@/components/base/checkboxGroup";

export const CheckboxGroupExample = () => {
  return (
    <CheckboxGroup label="Notifications">
      <Checkbox value="push"> Push </Checkbox>
      <Checkbox value="email"> Email </Checkbox>
      <Checkbox value="text"> Text </Checkbox>
    </CheckboxGroup>
  );
};
