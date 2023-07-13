import { ComponentPropsWithoutRef, forwardRef, type ElementRef } from "react";

import {
  Header as AriaHeader,
  Menu as AriaMenu,
  MenuTrigger as AriaMenuTrigger,
  Section as AriaSection,
  Item,
  Popover,
  Separator,
  type MenuTriggerProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const menu = tv({
  slots: {
    menuPopover:
      "overflow-auto rounded-xl border bg-surface shadow-xl [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut ",
    header: "p-2",
    content: "flex h-fit w-56 flex-col gap-2  p-2 outline-none",
    item: "relative flex cursor-pointer justify-between rounded-xl p-2 text-fg outline-none hover:bg-surface-2",
    separator: "mx-2 my-2 h-[1px] bg-surface-3",
  },
});

const { menuPopover, content, header, item, separator } = menu();

export interface MenuButtonProps extends MenuTriggerProps {
  className?: string | undefined;
  label?: string;
}

export const MenuTrigger = AriaMenuTrigger;
export const Section = AriaSection;

export const MenuConent = forwardRef<
  ElementRef<typeof AriaMenu>,
  ComponentPropsWithoutRef<typeof AriaMenu>
>(({ className, children, ...props }, ref) => (
  <Popover isNonModal className={menuPopover()}>
    <AriaMenu ref={ref} {...props} className={content({ className })}>
      {children}
    </AriaMenu>
  </Popover>
));

export const MenuItem = forwardRef<
  ElementRef<typeof Item>,
  Omit<ComponentPropsWithoutRef<typeof Item>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <Item ref={ref} {...props} className={item({ className })}>
    {children}
  </Item>
));

export const MenuHeader = forwardRef<
  ElementRef<typeof AriaHeader>,
  Omit<ComponentPropsWithoutRef<typeof AriaHeader>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AriaHeader ref={ref} {...props} className={header({ className })}>
    {children}
  </AriaHeader>
));

export const MenuSeperator = forwardRef<
  ElementRef<typeof Separator>,
  Omit<ComponentPropsWithoutRef<typeof Separator>, "className"> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <Separator ref={ref} {...props} className={separator({ className })} />
));
