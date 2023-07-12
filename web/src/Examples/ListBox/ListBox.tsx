import { ListBox, ListBoxItem } from "@/components/base/listBox";

export const ListBoxExample = () => {
  return (
    <ListBox aria-label="Ice cream flavors" selectionMode="multiple">
      <ListBoxItem>Chocolate</ListBoxItem>
      <ListBoxItem>Mint</ListBoxItem>
      <ListBoxItem>Strawberry</ListBoxItem>
      <ListBoxItem>Vanilla</ListBoxItem>
    </ListBox>
  );
};
