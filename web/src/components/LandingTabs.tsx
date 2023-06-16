import { TabContent, TabList, TabTrigger, Tabs } from "@ark-ui/react";

import { Button } from "@/ui/React/Button/button";
import { ColorPicker } from "@/ui/React/ColorPicker/ColorPicker";
import { Dialog } from "@/ui/React/Dialog/dialog";
import { Pagination } from "@/ui/React/Pagination/pagination";
import { RangeSlider } from "@/ui/React/RangeSlider/rangeSlider";
import { Slider } from "@/ui/React/Slider/slider";
import { Switch } from "@/ui/React/Switch/switch";
import { Code, ComponentIcon, DropletIcon } from "lucide-react";
import { useState } from "react";
import { tv } from "tailwind-variants";

export const tabsPotion = tv({
  slots: {
    list: "bg-muted text-muted-foreground relative inline-flex h-10 items-center justify-center rounded-md",
    trigger:
      " text-md  focus-visible:ring-ring inline-flex appearance-none  items-center justify-center whitespace-nowrap rounded-md px-3 py-2 font-medium text-text-5 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none  disabled:opacity-50 data-[selected]:bg-surface-2 data-[selected]:text-text data-[selected]:shadow-xl",
    content:
      "focus-visible:ring-ring mt-4 p-4 focus-visible:outline-none focus-visible:ring-2",
    indicator: "-bottom-1 h-1 bg-primary",
  },
});

const { list, trigger, content, indicator } = tabsPotion();

export const LandingTabs = () => {
  const [value, setValue] = useState<string | null>("potions");
  return (
    <Tabs
      className="flex w-full flex-col gap-8 md:flex-row"
      orientation="vertical"
      value={value}
      onChange={(e) => setValue(e.value)}
    >
      <TabList className="flex w-full items-start gap-2 md:w-1/4 md:flex-col">
        <TabTrigger
          className={trigger({
            className: "flex h-16 w-full items-center justify-start gap-2",
          })}
          value="potions"
        >
          <DropletIcon />
          <p>Potions</p>
        </TabTrigger>
        <TabTrigger
          className={trigger({
            className: "flex h-16 w-full items-center justify-start gap-2",
          })}
          value="components"
        >
          <ComponentIcon />
          <p>Components</p>
        </TabTrigger>
        <TabTrigger
          className={trigger({
            className: "flex h-16 w-full items-center justify-start gap-2",
          })}
          value="something"
        >
           <Code />
          <p>VScode</p>
        </TabTrigger>
      </TabList>
      <TabContent className="h-96 w-full md:w-3/4" value="potions">
        <img src="/public/potionDemo.png" />
      </TabContent>
      <TabContent className="h-96 w-full md:w-3/4" value="components">
        <div className="w-full hidden md:block justify-center items-center px-8 pb-4 overflow-hidden">
          <Pagination />
        </div>
        <div className="flex flex-col items-center md:flex-row w-full gap-8 p-8">
          <div className="flex w-1/2 flex-col justify-center gap-16">
            <div className="flex gap-4">
              <Button intent="accent" className="w-24 px-6">
                Button
              </Button>
              <Switch>Switch</Switch>
            </div>
            <Slider />
            <RangeSlider />
            <div className="w-1/2">
              <Dialog />
            </div>
          </div>
          <div className="w-1/2 flex-col gap-8">
            <ColorPicker />
          </div>
        </div>
      </TabContent>
      <TabContent className="h-96 w-3/4 bg-red-200" value="solid">
        Solid Content
      </TabContent>
    </Tabs>
  );
};
