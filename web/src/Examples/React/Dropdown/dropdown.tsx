import { dropdownPotion } from "@/components/base/dropdownPotion";
import {
  MenuContent as DropdownContent,
  MenuItem as DropdownItem,
  MenuPositioner as DropdownPositioner,
  Menu as DropdownRoot,
  MenuTrigger as DropdownTrigger,
  Portal,
} from "@ark-ui/react";
import { useState } from "react";

const dp = dropdownPotion();

export const Dropdown = () => {
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
        <button className="rounded-xl bg-surface-3 p-2">Dropdown</button>
      </DropdownTrigger>
      <Portal>
        <DropdownPositioner className="z-50">
          <DropdownContent className={dp.content()}>
            <DropdownItem
              className={dp.item({ className: "mt-2" })}
              id="profile"
            >
              <p>Option 1</p>
            </DropdownItem>
            <DropdownItem className={dp.item()} id="projects">
              <p>Option 2</p>
            </DropdownItem>
          </DropdownContent>
        </DropdownPositioner>
      </Portal>
    </DropdownRoot>
  );
};
