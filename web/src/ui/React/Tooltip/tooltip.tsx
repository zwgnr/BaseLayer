import { tooltipPotion } from "@/potions/tooltipPotion";
import {
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  Tooltip as TooltipRoot,
  TooltipTrigger,
  type TooltipProps as ArkToolTipProps,
} from "@ark-ui/react";

export type TooltipProps = Partial<ArkToolTipProps> & {
  placement?: NonNullable<ArkToolTipProps["positioning"]>["placement"];
};
const { positioner, content } = tooltipPotion();

export const Tooltip = (props: TooltipProps) => {
  const { placement = "top", ...tooltipProps } = props;
  return (
    <TooltipRoot
      openDelay={0}
      closeDelay={200}
      positioning={{ placement }}
      {...tooltipProps}
    >
      <TooltipTrigger asChild>
        <span>Hover me</span>
      </TooltipTrigger>
      <TooltipPositioner className={positioner()}>
        <TooltipArrow>
          <TooltipArrowTip />
        </TooltipArrow>
        <TooltipContent className={content()}>My Tooltip</TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
};
