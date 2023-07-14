import { Button } from "@/components/base/button";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip";

export const TooltipExample = () => {
  return (
    <TooltipTrigger>
      <Button>💾</Button>
      <Tooltip>Save</Tooltip>
    </TooltipTrigger>
  );
};
