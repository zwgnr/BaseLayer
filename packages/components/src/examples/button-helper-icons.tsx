import { PlusIcon, TrashIcon } from "lucide-react";

import { Button } from "../core/button/button";

export const ButtonHelperIcons = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
    <Button
      variant="primary"
      className="flex items-center justify-center gap-2"
    >
      <PlusIcon className="h-4 w-4" />
      <span>Add Item</span>
    </Button>
    <Button variant="danger" className="flex items-center justify-center gap-2">
      <TrashIcon className="h-4 w-4" />
      <span>Delete</span>
    </Button>
  </div>
  );
};