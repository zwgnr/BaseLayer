import { ComboBox, ComboBoxItem } from "@/components/base/combobox";

export const ComboBoxExample = () => {
  return (
    <ComboBox label="Ice cream flavor">
      <ComboBoxItem>Chocolate</ComboBoxItem>
      <ComboBoxItem>Mint</ComboBoxItem>
      <ComboBoxItem>Strawberry</ComboBoxItem>
      <ComboBoxItem>Vanilla</ComboBoxItem>
    </ComboBox>
  );
};
