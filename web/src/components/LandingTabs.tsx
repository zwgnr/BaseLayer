

import { Dialog } from "@/Examples/Dialog/Dialog";
import { Slider } from "@/Examples/Slider/Slider";
import { Switch } from "@/components/base/switch";
import { Code, ComponentIcon, DropletIcon } from "lucide-react";
import { useState } from "react";
import { tv } from "tailwind-variants";
import { Button } from "./base/button";
import { Calendar } from "./base/calendar";
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";



export const tabs = tv({
  slots: {
    list: "bg-muted text-muted-foreground relative inline-flex h-10 items-center justify-center rounded-md",
    trigger:
      " text-md focus-visible:ring-ring inline-flex appearance-none  items-center justify-center whitespace-nowrap rounded-md px-3 py-2 font-medium text-fg-5 focus-visible:outline-none disabled:pointer-events-none focus:outline-none  disabled:opacity-50 aria-selected:bg-surface-2 aria-selected:text-fg aria-selected:shadow-xl",
    content:
      "focus-visible:ring-ring mt-4 p-4 focus-visible:outline-none focus-visible:ring-2",
  },
});

const { list, trigger, content, } = tabs();

export const LandingTabs = () => {
  const [value, setValue] = useState<React.Key>('potions');
  return (
    <Tabs
      className="flex w-full flex-col lg:flex-row"
      orientation="vertical"
      selectedKey={value} onSelectionChange={setValue}
    >
      <TabList className="flex w-full items-start gap-2 px-2 lg:w-1/4 lg:flex-col">
        <Tab
          className={trigger({
            className:
              "flex h-16 w-1/3 flex-col items-center justify-start gap-2 text-sm lg:w-full lg:flex-row lg:text-base",
          })}
          id="potions"
        >
          <DropletIcon />
          <p>Potions</p>
        </Tab>
        <Tab
          className={trigger({
            className:
              "flex h-16 w-1/3 flex-col items-center justify-start gap-2 text-sm lg:w-full lg:flex-row lg:text-base",
          })}
          id="components"
        >
          <ComponentIcon />
          <p>Components</p>
        </Tab>
        <Tab
          className={trigger({
            className:
              "flex h-16 w-1/3 flex-col items-center justify-start gap-2 text-sm lg:w-full lg:flex-row lg:text-base",
          })}
          id="vsc"
        >
          <Code />
          <p>VScode</p>
        </Tab>
      </TabList>
      <TabPanel className="w-full lg:w-3/4" id="potions">
        <div className="flex w-full justify-center px-8 pb-16 lg:h-fit">
          <img
            className="mt-16 w-full rounded-xl shadow-2xl lg:w-full"
            src="/ptn.png"
          />
        </div>
      </TabPanel>
      <TabPanel className="w-full lg:w-3/4" id="components">
        <div className="flex w-full flex-col items-center gap-8 py-8 lg:flex-row lg:p-8">
          <div className="flex w-full flex-col items-center justify-center gap-16 lg:w-1/2">
            <div className="flex gap-4">
              <Button className="w-24 px-6">
                Button
              </Button>
              <Switch>Switch</Switch>
            </div>
            <Slider />
            <Dialog />
          </div>
          <div className="flex w-full justify-center lg:w-1/2">
            <Calendar />
          </div>
        </div>

      </TabPanel>
      <TabPanel className="w-full lg:w-3/4" id="vsc">
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
      </TabPanel>
    </Tabs>
  );
};
