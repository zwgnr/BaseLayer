import { tooltipPotion } from "@/potions/tooltipPotion";
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@ark-ui/react";
import type { ReactNode } from "react";

const { positioner, content } = tooltipPotion();

interface IconTooltipProps {
  children: ReactNode;
  name: string;
}

export const IconTooltip = ({ children, name }: IconTooltipProps) => {
  return (
    <Tooltip
      openDelay={100}
      closeDelay={200}
      positioning={{ placement: "bottom" }}
    >
      <TooltipTrigger className=" cursor-default ">{children}</TooltipTrigger>

      <TooltipPositioner className={positioner()}>
        <TooltipArrow>
          <TooltipArrowTip />
        </TooltipArrow>
        <TooltipContent className={content()}>{name}</TooltipContent>
      </TooltipPositioner>
    </Tooltip>
  );
};
