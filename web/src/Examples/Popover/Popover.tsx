import { Button } from "@/components/base/button";
import { Popover, PopoverTrigger } from "@/components/base/popover";
import { MoreHorizontal } from "lucide-react";

export const PopoverExample = () => {
  return (
    <PopoverTrigger>
      <Button intent="secondary">
        <MoreHorizontal />
      </Button>
      <Popover>
        <button className="rounded-md p-2 hover:bg-surface-2">Download</button>
      </Popover>
    </PopoverTrigger>
  );
};
