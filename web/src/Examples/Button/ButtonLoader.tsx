import { Button } from "@/components/base/button";
import { Loader } from "lucide-react";

export const ButtonLoader = () => (
  <Button isDisabled>
    <Loader className="mr-2 h-4 w-4 animate-spin" />
    Loading
  </Button>
);
