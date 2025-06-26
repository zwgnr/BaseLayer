import { ComboBox, ComboBoxItem } from "../core/combobox/combobox";

export const ComboboxBase = () => {
  return (
    <div className="flex w-64 items-center justify-center gap-2">
    <ComboBox label="Select a Model">
      <ComboBoxItem textValue="ChatGPT">ChatGPT</ComboBoxItem>
      <ComboBoxItem textValue="Gemini">Gemini</ComboBoxItem>
      <ComboBoxItem textValue="Claude">Claude</ComboBoxItem>
    </ComboBox>
  </div>
  );
};