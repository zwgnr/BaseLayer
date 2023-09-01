import type { HTMLAttributes } from "react";

import {
  Header as AriaHeader,
  Menu as AriaMenu,
  MenuTrigger as AriaMenuTrigger,
  Section as AriaSection,
  Item,
  Popover,
  Separator,
  type ItemProps,
  type PopoverProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const menu = tv({
  slots: {
    menuPopover:
      "overflow-auto rounded-xl border border-border bg-surface shadow-xl data-[entering]:animate-fade data-[exiting]:animate-fadeOut ",
    header: "p-2",
    content: "flex h-fit w-56 flex-col gap-2 p-2 outline-none",
    item: "relative flex cursor-pointer justify-between rounded-md p-2 text-fg outline-none data-[focused]:bg-surface-2",
    separator: "mx-2 my-2 h-[1px] bg-surface-3",
  },
});

const { menuPopover, content, header, item, separator } = menu();

const MenuTrigger = AriaMenuTrigger;
const Section = AriaSection;

const MenuConent = ({
  children,
  className,
  ...props
}: PopoverProps & { className?: string }) => (
  <Popover isNonModal {...props} className={menuPopover()}>
    <AriaMenu className={content({ className })}>{children}</AriaMenu>
  </Popover>
);

const MenuItem = ({
  children,
  className,
  ...props
}: ItemProps & { className?: string }) => (
  <Item {...props} className={item({ className })}>
    {children}
  </Item>
);

const MenuHeader = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { className?: string }) => (
  <AriaHeader {...props} className={header({ className })}>
    {children}
  </AriaHeader>
);

const MenuSeperator = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { className?: string }) => (
  <Separator {...props} className={separator({ className })} />
);

export {
  MenuConent,
  MenuHeader,
  MenuItem,
  MenuSeperator,
  MenuTrigger,
  Section,
};
