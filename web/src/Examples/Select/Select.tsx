import { Select, SelectItem } from "@/components/base/select";

export const SelectExample = () => {
  return (
    <Select label="Ice cream flavor">
      <SelectItem>Chocolate</SelectItem>
      <SelectItem>Mint</SelectItem>
      <SelectItem>Strawberry</SelectItem>
      <SelectItem>Vanilla</SelectItem>
    </Select>
  );
};
