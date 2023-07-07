import { button } from "@/components/base/button";
import { popoverPotion } from "@/components/base/popoverPotion";
import {
  Pressable as Button,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverPositioner,
  Popover as PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@ark-ui/react";
import { Star } from "lucide-react";

const { positioner, content, title } = popoverPotion();

export const Popover = () => {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <button className={button({ className: "flex gap-2" })}>
          <Star />
          <p>Favorite</p>
        </button>
      </PopoverTrigger>
      <PopoverPositioner className={positioner()}>
        <PopoverContent className={content()}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <PopoverTitle className={title()}>Favorite Lists</PopoverTitle>
              <PopoverDescription className="text-sm">
                Add to or create a new list!
              </PopoverDescription>
            </div>
            <div className="flex gap-3">
              <PopoverCloseTrigger asChild>
                <Button
                  className={button({
                    state: "outline",
                    className: "border- bg-surface hover:bg-slate-200",
                  })}
                >
                  Dismiss
                </Button>
              </PopoverCloseTrigger>
              <Button className={button()}>Save</Button>
            </div>
          </div>
        </PopoverContent>
      </PopoverPositioner>
    </PopoverRoot>
  );
};
