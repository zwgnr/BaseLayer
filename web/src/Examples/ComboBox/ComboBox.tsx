import { ComboBox, ComboBoxItem } from "@/components/base/combobox";

export const ComboBoxExample = () => {
  return (
    <ComboBox label="Project">
      <ComboBoxItem>Health Dashboard</ComboBoxItem>
      <ComboBoxItem>To-Do App</ComboBoxItem>
      <ComboBoxItem>UI Kit</ComboBoxItem>
      <ComboBoxItem>Portfolio Site</ComboBoxItem>
    </ComboBox>
  );
};
