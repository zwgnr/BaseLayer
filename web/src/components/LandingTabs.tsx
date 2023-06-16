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
      className="flex w-full flex-col lg:flex-row"
      orientation="vertical"
      value={value}
      onChange={(e) => setValue(e.value)}
    >
      <TabList className="flex w-full items-start gap-2 lg:w-1/4 lg:flex-col">
        <TabTrigger
          className={trigger({
            className:
              "flex h-16 w-1/3 flex-col items-center justify-start gap-2 lg:w-full lg:flex-row",
          })}
          value="potions"
        >
          <DropletIcon />
          <p>Potions</p>
        </TabTrigger>
        <TabTrigger
          className={trigger({
            className:
              "flex h-16 w-1/3 flex-col items-center justify-start gap-2 lg:w-full lg:flex-row",
          })}
          value="components"
        >
          <ComponentIcon />
          <p>Components</p>
        </TabTrigger>
        <TabTrigger
          className={trigger({
            className:
              "flex h-16 w-1/3 flex-col items-center justify-start gap-2 lg:w-full lg:flex-row",
          })}
          value="vsc"
        >
          <Code />
          <p>VScode</p>
        </TabTrigger>
      </TabList>
      <TabContent className="w-full lg:w-3/4" value="potions">
        <div className="flex w-full h-[500px] justify-center px-8">
          <img
            className="h-fit mt-16 w-full rounded-xl shadow-2xl lg:w-full"
            src="/ptn.png"
          />
        </div>
      </TabContent>
      <TabContent className="w-full lg:w-3/4" value="components">
        <div className="flex w-full flex-col items-center gap-8 py-8 lg:flex-row lg:p-8">
          <div className="flex w-full flex-col items-center justify-center gap-16 lg:w-1/2">
            <div className="flex gap-4">
              <Button intent="accent" className="w-24 px-6">
                Button
              </Button>
              <Switch>Switch</Switch>
            </div>
            <Slider />
            <RangeSlider />
            <Dialog />
          </div>
          <div className="flex w-full justify-center lg:w-1/2">
            <ColorPicker />
          </div>
        </div>
        <div className="hidden w-full items-center justify-center lg:flex">
          <Pagination />
        </div>
      </TabContent>
      <TabContent className="w-full lg:w-3/4" value="vsc">
        <div className="relative mt-12 flex flex-col items-center gap-4 lg:h-[500px] lg:flex-row">
          <img
            className="left-8 top-0 w-full rounded-lg shadow-2xl lg:absolute lg:mb-0 lg:w-1/2 "
            src="/add.jpg"
          />
          <img
            className="bottom-0 right-12 w-full rounded-lg shadow-2xl lg:absolute lg:w-1/2"
            src="/snippets.jpg"
          />
        </div>
      </TabContent>
    </Tabs>
  );
};
