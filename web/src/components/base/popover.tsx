import {
  DialogTrigger as AriaDialogTrigger,
  Popover as AriaPopover,
  Dialog,
  OverlayArrow,
  type PopoverProps as AriaPopoverProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

export const popover = tv({
  slots: {
    root: "m-2 max-w-lg rounded-xl bg-surface-3 p-12 text-fg shadow-md outline-none [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut",
    arrow:
      "[&[data-placement=bottom]>svg]:rotate-180 [&[data-placement=left]>svg]:-rotate-90 [&[data-placement=right]>svg]:rotate-90 ",
    content: "outline-none",
  },
});

const { root, arrow, content } = popover();

interface DialogProps extends Omit<AriaPopoverProps, "children"> {
  children: React.ReactNode;
}

const PopoverTrigger = AriaDialogTrigger;

const Popover = ({ children, ...props }: DialogProps) => (
  <AriaPopover className={root()} {...props}>
    <OverlayArrow className={arrow()}>
      <svg className="fill-surface-3" width={8} height={8}>
        <path d="M0 0,L4 4,L8 0" />
      </svg>
    </OverlayArrow>
    <Dialog className={content()}>{children}</Dialog>
  </AriaPopover>
);

export { PopoverTrigger, Popover };
