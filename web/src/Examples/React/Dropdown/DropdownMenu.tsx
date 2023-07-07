import { dropdownPotion } from "@/components/base/dropdownPotion";
import {
  MenuContent as DropdownContent,
  MenuItem as DropdownItem,
  MenuPositioner as DropdownPositioner,
  Menu as DropdownRoot,
  MenuSeparator as DropdownSeparator,
  MenuTrigger as DropdownTrigger,
  MenuTriggerItem as DropdownTriggerItem,
  Portal,
} from "@ark-ui/react";
import {
  ChevronRight,
  Cloud,
  CreditCard,
  HelpCircle,
  LogOut,
  Plus,
  Settings,
} from "lucide-react";
import { useState } from "react";

const dp = dropdownPotion();

export const DropdownMenu = () => {
  const [value, setValue] = useState<Record<string, string | string[]>>({
    theme: "",
    features: [],
  });
  return (
    <DropdownRoot
      closeOnSelect={false}
      onValueChange={(data) => {
        setValue((prev) => ({
          ...prev,
          [data.name]: data.value,
        }));
      }}
      value={value}
    >
      <DropdownTrigger asChild>
        <button>me</button>
      </DropdownTrigger>
      <Portal>
        <DropdownPositioner className="z-50">
          <DropdownContent className={dp.content()}>
            <DropdownItem
              className={dp.item({ className: "cursor-default" })}
              disabled
              id="new-tab"
            >
              <p className="text-gray-500">me@hey.com</p>
            </DropdownItem>
            <DropdownSeparator
              className={dp.seperator({ className: "mb-2" })}
            />
            <DropdownItem className={dp.item()} id="profile">
              <p>Account Settings</p>
              <Settings className="h-5 w-5" />
            </DropdownItem>
            <DropdownItem className={dp.item()} id="projects">
              <p>Billing</p>
              <CreditCard className="h-5 w-5" />
            </DropdownItem>
            <DropdownSeparator
              className={dp.seperator({ className: "my-2" })}
            />
            <DropdownItem className={dp.item()} id="team">
              <p>Create a Team</p>
              <Plus className="h-5 w-5" />
            </DropdownItem>

            <DropdownRoot
              closeOnSelect={false}
              positioning={{ placement: "right-start" }}
            >
              <DropdownTriggerItem className={dp.triggerItem()}>
                <div className="flex w-full flex-1 items-center justify-between p-2 py-1.5">
                  <p>Invite a member </p>
                  <ChevronRight />
                </div>
              </DropdownTriggerItem>
              <Portal>
                <DropdownPositioner className="z-50">
                  <DropdownContent className={dp.content()}>
                    <DropdownItem className={dp.item()} id="twitter">
                      Twitter
                    </DropdownItem>
                    <DropdownItem
                      className={dp.item({ className: "mb-0" })}
                      id="message"
                    >
                      Email
                    </DropdownItem>
                  </DropdownContent>
                </DropdownPositioner>
              </Portal>
            </DropdownRoot>

            <DropdownSeparator
              className={dp.seperator({ className: "my-2" })}
            />
            <DropdownItem className={dp.item()} id="support">
              <p>Support</p>
              <HelpCircle className="h-5 w-5" />
            </DropdownItem>
            <DropdownItem className={dp.item()} id="api">
              <p>Api</p>
              <Cloud className="h-5 w-5" />
            </DropdownItem>
            <DropdownSeparator
              className={dp.seperator({ className: "my-2" })}
            />
            <DropdownItem className={dp.item()} id="logout">
              <p>Logout</p>
              <LogOut className="h-5 w-5" />
            </DropdownItem>
          </DropdownContent>
        </DropdownPositioner>
      </Portal>
    </DropdownRoot>
  );
};
