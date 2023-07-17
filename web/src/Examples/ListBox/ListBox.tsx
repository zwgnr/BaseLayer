import { ListBox, ListBoxItem } from "@/components/base/listBox";

export const ListBoxExample = () => {
  return (
    <ListBox aria-label="Member" selectionMode="multiple">
      <ListBoxItem>Matt</ListBoxItem>
      <ListBoxItem>Sarah</ListBoxItem>
      <ListBoxItem>James</ListBoxItem>
      <ListBoxItem>Kim</ListBoxItem>
    </ListBox>
  );
};
