import {
  Pressable as Button,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardPositioner,
  HoverCard as HoverCardRoot,
  HoverCardTrigger,
  Portal,
} from "@ark-ui/react";
import { buttonPotion } from "@potions/buttonPotion";
import { hoverCardPotion } from "@potions/hoverCardPotion";

const { positioner, content } = hoverCardPotion();

export const HoverCard = () => {
  return (
    <HoverCardRoot>
      <HoverCardTrigger asChild>
        <a href="" target="_blank" rel="noreferrer">
          <img
            className="h-24 w-24 rounded-lg object-cover"
            src="https://tinyurl.com/2vscrc3v"
          />
        </a>
      </HoverCardTrigger>
      <Portal>
        <HoverCardPositioner className={positioner()}>
          <HoverCardContent className={content()}>
            <HoverCardArrow>
              <HoverCardArrowTip />
            </HoverCardArrow>
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full justify-between">
                <img
                  className="h-16 w-16 rounded-xl object-cover"
                  alt="Headphones"
                  src="https://tinyurl.com/2vscrc3v"
                />
                <Button
                  className={buttonPotion()}
                  onClick={() => alert("Added to Cart!")}
                >
                  Add to Cart
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold">
                  Noise Canceling Headphones
                </h1>
                <h2 className="text-md">$299.99</h2>
              </div>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </Portal>
    </HoverCardRoot>
  );
};
