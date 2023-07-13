import type {
  ComboBoxProps as AriaComboBoxProps,
  ItemProps,
} from "react-aria-components";

import {
  ComboBox as AriaComboBox,
  Button,
  Input,
  Item,
  Label,
  ListBox,
  Popover,
  Text,
} from "react-aria-components";

import { tv } from "tailwind-variants";
import { ChevronDown } from "lucide-react";

export const combobox = tv({
  slots: {
    input: "m-0 rounded-xl border p-2 align-middle w-64 bg-surface text-fg",
    root: "max-h-inherit overflow-auto p-1 outline-none",
    item: "relative m-1 flex cursor-default flex-col rounded-xl outline-none p-2 hover:bg-surface-2 ",
    popover: "rounded-xl border shadow-xl outline-none bg-surface w-64 p-2 text-fg",
    button:"absolute right-2 flex appearance-none items-center justify-center rounded-lg border-0 outline-none hover:bg-surface-2"
  },
});

const { input, button, item, popover, root } = combobox();

interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, "children"> {
  className?: string;
  label?: string;
  description?: string | null;
  errorMessage?: string | null;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function ComboBox<T extends object>({
  label,
  className,
  description,
  errorMessage,
  children,
  ...props
}: ComboBoxProps<T>) {
  return (
    <AriaComboBox className={root({ className })} {...props}>
      <Label>{label}</Label>
      <div className="relative flex w-fit  items-center rounded-2xl bg-surface">
        <Input className={input()} />
        <Button className={button()}><ChevronDown  /></Button>
      </div>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      <Popover className={popover()}>
        <ListBox>{children}</ListBox>
      </Popover>
    </AriaComboBox>
  );
}

export function ComboBoxItem(props: ItemProps) {
  return <Item {...props} className={item()} />;
}
