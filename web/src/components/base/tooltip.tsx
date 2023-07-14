import {
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
  OverlayArrow,
  type TooltipProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const tooltip = tv({
  slots: {
    root: "shadow-md outline-none p-4 max-w-sm text-fg bg-surface-3 m-2 [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut rounded-xl",
    arrow:"[&[data-placement=bottom]>svg]:rotate-180 [&[data-placement=right]>svg]:rotate-90 [&[data-placement=left]>svg]:-rotate-90 ",
    segmentStyles:
      "rounded-xl p-2 text-end outline-none focus:bg-secondary focus:text-secondary-fg",
  },
});

const { root, arrow } = tooltip();

interface MyTooltipProps extends Omit<TooltipProps, "children"> {
  children: React.ReactNode;
}

export const TooltipTrigger = AriaTooltipTrigger;

export function Tooltip({ children, ...props }: MyTooltipProps) {
  return (
    <AriaTooltip className={root()} {...props}>
      <OverlayArrow  className={arrow()}>
        <svg  className="fill-surface-3" width={8} height={8}>
          <path  d="M0 0,L4 4,L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  );
}
