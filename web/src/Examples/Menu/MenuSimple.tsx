import { Button } from "@/components/base/button";
import { MenuContent, MenuItem, MenuTrigger } from "@/components/base/menu";

export const MenuSimple = () => {
  return (
    <MenuTrigger>
      <Button intent="secondary">Edit</Button>
      <MenuContent>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuContent>
    </MenuTrigger>
  );
};
