import {
  Pressable as Button,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  Dialog as DialogRoot,
  DialogTitle,
  DialogTrigger,
  Portal,
} from "@ark-ui/react";
import { buttonPotion } from "@potions/buttonPotion";
import { dialogPotion } from "@potions/dialogPotion";
import { X } from "lucide-react";

const { backdrop, container, content, description, title } = dialogPotion();

export const Dialog = () => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button className={buttonPotion()}>Open dialog</Button>
      </DialogTrigger>
      <Portal>
        <DialogBackdrop className={backdrop()} />
        <DialogContainer className={container()}>
          <DialogContent className={content()}>
            <div className="flex flex-col gap-8 p-6">
              <div className="flex flex-col gap-1">
                <DialogTitle className={title()}>Dialog Title</DialogTitle>
                <DialogDescription className={description()}>
                  Dialog Description
                </DialogDescription>
              </div>
              <div className="flex w-full items-center justify-center gap-3">
                <DialogCloseTrigger asChild>
                  <Button
                    className={buttonPotion({
                      state: "outline",
                      className:
                        "border-critical text-critical hover:border-critical-700",
                    })}
                  >
                    Cancel
                  </Button>
                </DialogCloseTrigger>
                <Button
                  className={buttonPotion({
                    className: "bg-positive hover:bg-positive-700",
                  })}
                >
                  Confirm
                </Button>
              </div>
            </div>
            <DialogCloseTrigger asChild>
              <Button className="absolute right-6 top-6">
                <X aria-label="Close dialog" />
              </Button>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </DialogRoot>
  );
};
