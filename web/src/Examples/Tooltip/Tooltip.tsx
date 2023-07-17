import { Button } from "@/components/base/button";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip";
import { Save } from "lucide-react";

export const TooltipExample = () => {
  return (
    <TooltipTrigger>
      <Button intent="secondary">
        <Save />
      </Button>
      <Tooltip>Save</Tooltip>
    </TooltipTrigger>
  );
};
