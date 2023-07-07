import { dropdownPotion } from "@/components/base/dropdownPotion";
import { radioGroupPotion } from "@/components/base/radioGroupPotion";
import {
  MenuContent as DropdownContent,
  MenuItemGroup as DropdownItemGroup,
  MenuItemGroupLabel as DropdownItemGroupLabel,
  MenuOptionItem as DropdownOptionItem,
  MenuPositioner as DropdownPositioner,
  Menu as DropdownRoot,
  MenuSeparator as DropdownSeparator,
  MenuTrigger as DropdownTrigger,
  Portal,
  Radio,
  RadioControl,
  RadioGroup,
  RadioInput,
  RadioLabel,
} from "@ark-ui/react";
import { useState } from "react";

const dp = dropdownPotion();
const rgp = radioGroupPotion();

export const DropdownRadioGroup = () => {
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
        <button className="rounded-lg bg-surface-3 p-2">Theme</button>
      </DropdownTrigger>
      <Portal>
        <DropdownPositioner className="z-50">
          <DropdownContent className={dp.content()}>
            <DropdownItemGroup id="radio-group" className="mb-2">
              <DropdownItemGroupLabel
                className={dp.itemGroupLabel()}
                htmlFor="radio-group"
              >
                Theme
              </DropdownItemGroupLabel>
              <DropdownSeparator
                className={dp.seperator({ className: "my-2" })}
              />
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
          </DropdownContent>
        </DropdownPositioner>
      </Portal>
    </DropdownRoot>
  );
};
