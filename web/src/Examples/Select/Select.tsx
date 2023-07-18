import { Select, SelectItem } from "@/components/base/select";

export const SelectExample = () => {
  return (
    <Select label="New Project">
      <SelectItem>React</SelectItem>
      <SelectItem>Vue</SelectItem>
      <SelectItem>Svelte</SelectItem>
      <SelectItem>Solid</SelectItem>
    </Select>
  );
};
