import {
  Pressable as Button,
  DialogBackdrop,
  DialogContainer,
  DialogContent,
  Dialog as DialogRoot,
  DialogTrigger,
  Portal,
} from "@ark-ui/react";
import { buttonPotion } from "@potions/buttonPotion";
import { dialogPotion } from "@potions/dialogPotion";
import { Search as SearchIcon } from "lucide-react";
import Search, { type SearchProps } from "./search";

const { backdrop, container, content } = dialogPotion();

export const SearchDialog = ({ searchList }: SearchProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button
          className={buttonPotion({
            className: "rounded-xl bg-surface-2 py-2 hover:bg-surface-3",
          })}
        >
          <div className="flex gap-2 text-text">
            <p className="hidden md:block">Search</p>
            <SearchIcon />
          </div>
        </Button>
      </DialogTrigger>
      <Portal>
        <DialogBackdrop className={backdrop()} />
        <DialogContainer className={container()}>
          <DialogContent
            className={content({
              className: "mx-8 w-full overflow-hidden md:w-1/3",
            })}
          >
            <div className="flex flex-col gap-8 p-6">
              <Search searchList={searchList} />
            </div>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </DialogRoot>
  );
};
