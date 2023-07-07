import { Button } from "@/components/base/button";

import {
  DialogContent,
  DialogModal,
  DialogTrigger,
} from "@/components/base/dialog";
import { Search as SearchIcon } from "lucide-react";
import Search, { type SearchProps } from "./search";

export const SearchDialog = ({ searchList }: SearchProps) => {
  return (
    <DialogTrigger >
      <Button className="bg-surface-2 rounded-xl hover:bg-surface-3">
        <div className="flex gap-2 text-fg">
          <p className="hidden md:block">Search</p>
          <SearchIcon />
        </div>
      </Button>
      <DialogModal className=" w-3/4 lg:w-1/3">
        <DialogContent>
          <div className="flex flex-col gap-8 p-6">
            <Search searchList={searchList} />
          </div>
        </DialogContent>
      </DialogModal>
    </DialogTrigger>
  );
};
