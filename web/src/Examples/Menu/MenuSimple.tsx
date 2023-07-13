import { Button } from "@/components/base/button";
import { MenuConent, MenuItem, MenuTrigger } from "@/components/base/menu";

export const MenuSimple = () => {
  return (
    <MenuTrigger>
      <Button intent="secondary">Edit</Button>
      <MenuConent>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuConent>
    </MenuTrigger>
  );
};
