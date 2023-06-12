import {
  MenuContent as DropdownContent,
  MenuItem as DropdownItem,
  MenuItemGroup as DropdownItemGroup,
  MenuItemGroupLabel as DropdownItemGroupLabel,
  MenuOptionItem as DropdownOptionItem,
  MenuPositioner as DropdownPositioner,
  Menu as DropdownRoot,
  MenuSeparator as DropdownSeparator,
  MenuTrigger as DropdownTrigger,
  MenuTriggerItem as DropdownTriggerItem,
  Portal,
  Radio,
  RadioControl,
  RadioGroup,
  RadioInput,
  RadioLabel,
} from "@ark-ui/react";
import { Avatar } from "@components/avatar";
import { Checkbox } from "@components/checkbox";
import { dropdownPotion } from "@potions/dropdownPotion";
import { radioGroupPotion } from "@potions/radioGroupPotion";
import { ChevronRight, Plus, Settings } from "lucide-react";
import { useState } from "react";

const dp = dropdownPotion();
const rgp = radioGroupPotion();

export const Dropdown = () => {
  const [value, setValue] = useState<Record<string, string | string[]>>({
    theme: "",
    features: [],
  });
  const options = [
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
  ];
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
        <button>
          <Avatar />
        </button>
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
              <p>Create a Team</p>
              <Plus className="h-5 w-5" />
            </DropdownItem>
            <DropdownSeparator
              className={dp.seperator({ className: "my-2" })}
            />
            <DropdownItemGroup id="radio-group" className="mb-2">
              <DropdownItemGroupLabel
                className={dp.itemGroupLabel()}
                htmlFor="radio-group"
              >
                Theme
              </DropdownItemGroupLabel>
              <RadioGroup className={rgp.root()} defaultValue="light">
                {options.map((option, id) => (
                  <DropdownOptionItem
                    className={dp.optionItem()}
                    name="theme"
                    type="radio"
                    value={option.id}
                    key={id}
                  >
                    <Radio className={rgp.radio()} value={option.id}>
                      <RadioInput />
                      <RadioControl className={rgp.control()} />
                      <RadioLabel className={rgp.radioLabel()}>
                        {option.label}
                      </RadioLabel>
                    </Radio>
                  </DropdownOptionItem>
                ))}
              </RadioGroup>
            </DropdownItemGroup>
            <DropdownItemGroup
              id="checkbox-group"
              className="mb-2 flex flex-col gap-2"
            >
              <DropdownItemGroupLabel
                className={dp.itemGroupLabel()}
                htmlFor="checkbox-group"
              >
                Beta Features
              </DropdownItemGroupLabel>
              <DropdownOptionItem
                className={dp.optionItem()}
                name="features"
                type="checkbox"
                value="stats-1"
              >
                {({ isActive }) => (
                  <Checkbox size="sm" checked={isActive}>
                    Stats
                  </Checkbox>
                )}
              </DropdownOptionItem>
              <DropdownOptionItem
                className={dp.optionItem()}
                name="features"
                type="checkbox"
                value="autosave-1"
              >
                {({ isActive }) => (
                  <Checkbox size="sm" checked={isActive}>
                    Autosave
                  </Checkbox>
                )}
              </DropdownOptionItem>
              <DropdownOptionItem
                className={dp.optionItem()}
                name="features"
                type="checkbox"
                value="ai-1"
              >
                {({ isActive }) => (
                  <Checkbox size="sm" checked={isActive}>
                    AI Assist
                  </Checkbox>
                )}
              </DropdownOptionItem>
            </DropdownItemGroup>
            <DropdownSeparator
              className={dp.seperator({ className: "mb-2" })}
            />
            <DropdownRoot
              closeOnSelect={false}
              positioning={{ placement: "right-start" }}
            >
              <DropdownTriggerItem className={dp.triggerItem()}>
                <span className="flex flex-1 p-2">Contact options</span>
                <ChevronRight />
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
          </DropdownContent>
        </DropdownPositioner>
      </Portal>
    </DropdownRoot>
  );
};
