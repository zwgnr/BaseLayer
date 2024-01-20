import type { HTMLAttributes } from "react";

import {
  Header as AriaHeader,
  Menu as AriaMenu,
  MenuTrigger as AriaMenuTrigger,
  Section as AriaSection,
  MenuItem as AriaMenuItem,
  Popover,
  Separator,
  type MenuItemProps,
  type MenuProps,
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

const MenuContent = <T extends object>({
  children,
  className,
  ...props
}: MenuProps<T> & { className?: string }) => (
  <Popover isNonModal {...props} className={menuPopover()}>
    <AriaMenu {...props} className={content({ className })}>
      {children}
    </AriaMenu>
  </Popover>
);

const MenuItem = ({
  children,
  className,
  ...props
}: MenuItemProps & { className?: string }) => (
  <AriaMenuItem {...props} className={item({ className })}>
    {children}
  </AriaMenuItem>
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
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { className?: string }) => (
  <Separator {...props} className={separator({ className })} />
);

export {
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSeperator,
  MenuTrigger,
  Section,
};
