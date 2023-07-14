import { Button } from "@/components/base/button";
import { Popover, PopoverTrigger } from "@/components/base/popover";

export const PopoverExample = () => {
  return (
    <PopoverTrigger>
      <Button>Open ME</Button>
      <Popover>This is an example popover.</Popover>
    </PopoverTrigger>
  );
};
