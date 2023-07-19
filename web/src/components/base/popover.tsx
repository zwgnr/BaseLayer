import {
  DialogTrigger as AriaDialogTrigger,
  Popover as AriaPopover,
  Dialog,
  type PopoverProps as AriaPopoverProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

export const popover = tv({
  slots: {
    root: "m-1 max-w-lg rounded-xl border border-border bg-surface p-2 text-fg shadow-xl outline-none [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut",
    content: "outline-none",
  },
});

const { root, content } = popover();

interface DialogProps extends Omit<AriaPopoverProps, "children"> {
  children: React.ReactNode;
}

const PopoverTrigger = AriaDialogTrigger;

const Popover = ({ children, ...props }: DialogProps) => (
  <AriaPopover className={root()} {...props}>
    <Dialog className={content()}>{children}</Dialog>
  </AriaPopover>
);

export { Popover, PopoverTrigger };
