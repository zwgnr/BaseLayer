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
import { buttonPotion } from "@potions/buttonPotion";
import { popoverPotion } from "@potions/popoverPotion";
import { Star } from "lucide-react";

const { popoverPositioner, popoverContent, popoverTitle } = popoverPotion();

export const Popover = () => {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <button className={buttonPotion()}>
          <Star />
          <p>Favorite</p>
        </button>
      </PopoverTrigger>
      <PopoverPositioner className={popoverPositioner()}>
        <PopoverContent className={popoverContent()}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <PopoverTitle className={popoverTitle()}>
                Favorite Lists
              </PopoverTitle>
              <PopoverDescription className="text-sm">
                Add to or create a new list!
              </PopoverDescription>
            </div>
            <div className="flex gap-3">
              <PopoverCloseTrigger asChild>
                <Button
                  className={buttonPotion({
                    state: "outline",
                    className: "border- bg-surface hover:bg-slate-200",
                  })}
                >
                  Dismiss
                </Button>
              </PopoverCloseTrigger>
              <Button className={buttonPotion()}>Dismiss</Button>
            </div>
          </div>
        </PopoverContent>
      </PopoverPositioner>
    </PopoverRoot>
  );
};
