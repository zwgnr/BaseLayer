import { Button } from "@/components/base/button";

import {
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSeperator,
  MenuTrigger,
  Section,
} from "@/components/base/menu";

import {
  CreditCard,
  HelpCircle,
  LogOut,
  Plus,
  Settings,
  User,
} from "lucide-react";

export const Menu = () => {
  return (
    <MenuTrigger>
      <Button
        intent="secondary"
        className="h-full rounded-full p-4 text-xl"
        state="outline"
      >
        Me
      </Button>
      <MenuContent>
        <Section>
          <MenuHeader className="text-fg-4">me@hello.com</MenuHeader>
        </Section>
        <MenuSeperator className="mt-0" />
        <MenuItem>
          Account Settings
          <Settings />
        </MenuItem>
        <MenuItem>
          Billing
          <CreditCard />
        </MenuItem>
        <MenuItem>
          Create a Team
          <Plus />
        </MenuItem>
        <MenuItem>
          Invite Member
          <User />
        </MenuItem>
        <MenuSeperator />
        <MenuItem>
          Support
          <HelpCircle />
        </MenuItem>
        <MenuItem>
          Logout
          <LogOut />
        </MenuItem>
      </MenuContent>
    </MenuTrigger>
  );
};
