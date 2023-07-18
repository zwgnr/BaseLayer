import { Icon } from "@iconify/react";
import { Button } from "react-aria-components";
import { Tooltip, TooltipTrigger } from "./base/tooltip";

interface IconTooltipProps {
  iconName: string;
  name: string;
  color: string
}

export const IconTooltip = ({ color, iconName, name }: IconTooltipProps) => {
  return (
    <TooltipTrigger>
      <Button>
        <Icon
          icon={iconName}
          className="h-12 w-12 text-fg-5"
          color={color}
        />
      </Button>
      <Tooltip placement="bottom">{name}</Tooltip>
    </TooltipTrigger>
  );
};
