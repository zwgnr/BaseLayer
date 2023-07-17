import type {
  SelectProps as AriaSelectProps,
  ItemProps,
} from "react-aria-components";

import {
  Select as AriaSelect,
  Button,
  Item,
  Label,
  ListBox,
  Popover,
  SelectValue,
  Text,
} from "react-aria-components";

import { ChevronDown } from "lucide-react";
import { tv } from "tailwind-variants";

const select = tv({
  slots: {
    root: "max-h-inherit flex flex-col gap-2 overflow-auto p-1 outline-none",
    item: "relative m-1 flex cursor-default flex-col rounded-md p-2 outline-none hover:bg-surface-2 ",
    popover:
      "w-64 rounded-xl border bg-surface p-2 text-fg shadow-xl outline-none",
    button:
      "flex w-56 appearance-none items-center justify-between rounded-md border p-2 outline-none hover:bg-surface-2",
  },
});

const { button, item, popover, root } = select();

interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  className?: string;
  label?: string;
  description?: string | null;
  errorMessage?: string | null;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

const Select = <T extends object>({
  label,
  className,
  description,
  errorMessage,
  children,
  ...props
}: SelectProps<T>) => (
  <AriaSelect className={root({ className })} {...props}>
    <Label>{label}</Label>
    <Button className={button()}>
      <SelectValue />
      <ChevronDown />
    </Button>
    {description && <Text slot="description">{description}</Text>}
    {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    <Popover className={popover()}>
      <ListBox className="outline-none">{children}</ListBox>
    </Popover>
  </AriaSelect>
);

const SelectItem = (props: ItemProps) => {
  return <Item {...props} className={item()} />;
};

export { Select, SelectItem };
