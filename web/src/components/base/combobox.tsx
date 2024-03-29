import type {
  ComboBoxProps as AriaComboBoxProps,
  ListBoxItemProps,
} from "react-aria-components";

import {
  ComboBox as AriaComboBox,
  Button,
  Input,
  ListBoxItem,
  Label,
  ListBox,
  Popover,
  Text,
} from "react-aria-components";

import { ChevronDown } from "lucide-react";
import { tv } from "tailwind-variants";

const combobox = tv({
  slots: {
    input:
      "m-0 w-64 rounded-md border border-border bg-surface p-2 align-middle text-fg outline-none ring-fg focus:border-transparent focus:ring-2",
    root: "max-h-inherit overflow-auto p-1 outline-none",
    item: "relative m-1 flex cursor-default flex-col rounded-md p-2 outline-none aria-selected:bg-secondary aria-selected:text-secondary-fg data-[focused]:bg-surface-2 data-[focused]:aria-selected:bg-secondary ",
    popover:
      "w-64 rounded-xl border border-border bg-surface p-2 text-fg shadow-xl outline-none",
    button:
      "absolute right-2 flex appearance-none items-center justify-center rounded-md border-0 outline-none data-[hovered]:bg-surface-2",
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

const ComboBox = <T extends object>({
  label,
  className,
  description,
  errorMessage,
  children,
  ...props
}: ComboBoxProps<T>) => (
  <AriaComboBox className={root({ className })} {...props}>
    <Label className="text-fg">{label}</Label>
    <div className="relative flex w-fit items-center rounded-2xl bg-surface">
      <Input className={input()} />
      <Button className={button()}>
        <ChevronDown className="text-fg" />
      </Button>
    </div>
    {description && <Text slot="description">{description}</Text>}
    {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    <Popover className={popover()}>
      <ListBox>{children}</ListBox>
    </Popover>
  </AriaComboBox>
);

ComboBox.displayName = "ComboBox";

const ComboBoxItem = (props: ListBoxItemProps) => (
  <ListBoxItem {...props} className={item()} />
);

ComboBoxItem.displayName = "ComboBoxItem";

export { ComboBox, ComboBoxItem };
