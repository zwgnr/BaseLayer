import {
  DialogTrigger as AriaDialogTrigger,
  Dialog,
  OverlayArrow,
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const popover = tv({
  slots: {
    root: "shadow-md outline-none p-12 max-w-lg text-fg bg-surface-3 m-2 [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut rounded-xl",
    arrow:"[&[data-placement=bottom]>svg]:rotate-180 [&[data-placement=right]>svg]:rotate-90 [&[data-placement=left]>svg]:-rotate-90 ",
    content:
      "outline-none",
  },
});

const { root, arrow, content } = popover();

interface DialogProps extends Omit<AriaPopoverProps, "children"> {
  children: React.ReactNode;
}

export const PopoverTrigger = AriaDialogTrigger;

export function Popover({ children, ...props }: DialogProps) {
  return (
    <AriaPopover className={root()} {...props}>
      <OverlayArrow  className={arrow()}>
        <svg  className="fill-surface-3" width={8} height={8}>
          <path  d="M0 0,L4 4,L8 0" />
        </svg>
      </OverlayArrow>
      <Dialog className={content()}>
        {children}
      </Dialog>
    </AriaPopover>
  );
}
