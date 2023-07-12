import { Button } from "@/components/base/button";
import {
  Header,
  MenuConent,
  MenuItem,
  MenuSeperator,
  MenuTrigger,
  Section,
} from "@/components/base/menu";
import { Settings } from "lucide-react";

export const MenuFull = () => {
  return (
    <MenuTrigger>
      <Button className="h-full rounded-full p-4 text-xl" state="outline">
        Me
      </Button>
      <MenuConent>
        <Section>
          <Header>me@hello.com</Header>
        </Section>
        <MenuSeperator />
        <MenuItem>
          <p>Settings</p>
          <Settings />
        </MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuConent>
    </MenuTrigger>
  );
};
