import { ComponentPropsWithoutRef, forwardRef, type ElementRef } from "react";

import {
  Menu as AriaMenu,
  MenuTrigger as AriaMenuTrigger,
  Item,
  Popover,
  type MenuTriggerProps,
  Separator,
  Section as AriaSection,
  Header as AriaHeader
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Button } from "./button";

export const menu = tv({
  slots: {
    menuPopover:
      "overflow-auto rounded-xl shadow-xl bg-surface border [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut ",
    content: "flex h-full w-56 flex-col gap-2  p-2 outline-none",
    item: "relative text-fg outline-none flex justify-between hover:bg-surface-2 p-2 rounded-xl cursor-pointer",
    separator:"h-[1px] bg-surface-3 mx-2 my-2"
  },
});

const { menuPopover, content, item, separator } = menu();

export interface MenuButtonProps extends MenuTriggerProps {
  className?: string | undefined;
  label?: string;
}

export const MenuTrigger = AriaMenuTrigger
export const Section = AriaSection
export const Header = AriaHeader

export const MenuConent = forwardRef<
  ElementRef<typeof AriaMenu>,
  ComponentPropsWithoutRef<typeof AriaMenu>
>(({ className, children, ...props }, ref) => (
  <Popover  className={menuPopover()}>
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

export const MenuSeperator = forwardRef<
  ElementRef<typeof Separator>,
  Omit<ComponentPropsWithoutRef<typeof Separator>, "className"> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <Separator ref={ref} {...props} className={separator({ className })} />
));
