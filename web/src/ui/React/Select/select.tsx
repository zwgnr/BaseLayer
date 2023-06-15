import { selectPotion } from "@/potions/selectPotion";
import {
  Portal,
  SelectContent,
  SelectOption,
  SelectPositioner,
  Select as SelectRoot,
  SelectTrigger,
} from "@ark-ui/react";
import { ChevronDown } from "lucide-react";

const { trigger, content, option } = selectPotion();

export const Select = () => {
  const SelectIcon = (props: { isOpen: boolean }) => {
    const iconStyles = {
      transform: props.isOpen ? "rotate(-180deg)" : undefined,
      transition: "transform 0.2s",
      transformOrigin: "center",
    };
    return <ChevronDown style={iconStyles} />;
  };

  return (
    <SelectRoot>
      {({ selectedOption, isOpen }) => (
        <>
          <SelectTrigger className={trigger()} asChild>
            <button className="flex flex-row justify-between">
              <span>{selectedOption?.label ?? "Select option"}</span>
              <SelectIcon isOpen={isOpen} />
            </button>
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent className={content()}>
                <SelectOption
                  className={option()}
                  value="react"
                  label="React"
                />
                <SelectOption className={option()} value="solid" label="Solid">
                  Solid
                </SelectOption>
                <SelectOption className={option()} value="vue" label="Vue">
                  Vue
                </SelectOption>
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </>
      )}
    </SelectRoot>
  );
};
