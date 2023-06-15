import { buttonPotion } from "@/potions/buttonPotion";
import { Pressable as Button } from "@ark-ui/react";
import { Loader } from "lucide-react";

<Button className={buttonPotion()} disabled>
  <Loader className="mr-2 h-4 w-4 animate-spin" />
  Loading
</Button>;
