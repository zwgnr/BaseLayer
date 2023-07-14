import type { ReactNode } from "react";
import {
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
  OverlayArrow,
  type TooltipProps as AriaTooltipProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const tooltip = tv({
  slots: {
    root: "m-2 max-w-sm rounded-xl bg-surface-3 p-4 text-fg shadow-md outline-none [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut",
    arrow:
      "[&[data-placement=bottom]>svg]:rotate-180 [&[data-placement=left]>svg]:-rotate-90 [&[data-placement=right]>svg]:rotate-90 ",
    segmentStyles:
      "rounded-xl p-2 text-end outline-none focus:bg-secondary focus:text-secondary-fg",
  },
});

const { root, arrow } = tooltip();

const TooltipTrigger = AriaTooltipTrigger;

interface TooltipProps extends Omit<AriaTooltipProps, "children"> {
  children: ReactNode;
}

const Tooltip = ({ children, ...props }: TooltipProps) => (
  <AriaTooltip className={root()} {...props}>
    <OverlayArrow className={arrow()}>
      <svg className="fill-surface-3" width={8} height={8}>
        <path d="M0 0,L4 4,L8 0" />
      </svg>
    </OverlayArrow>
    {children}
  </AriaTooltip>
);

export { TooltipTrigger, Tooltip };
