import { ComponentPropsWithoutRef, forwardRef, type ElementRef } from "react";
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabsRoot,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const tabs = tv({
  slots: {
    root: "flex w-full flex-col items-center",
    list: "text-muted-foreground relative inline-flex w-80 items-center justify-between rounded-xl bg-surface-2 p-1",
    trigger:
      "text-md focus-visible:ring-ring flex  h-10 appearance-none  items-center justify-center whitespace-nowrap rounded-md px-3 py-3 font-medium text-fg-5 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none  disabled:opacity-50 data-[selected]:bg-surface-2 data-[selected]:text-fg",
    panel:
      "focus-visible:ring-ring  mt-4 p-4 focus-visible:outline-none focus-visible:ring-2",
    tab: "relative flex w-1/3 cursor-pointer justify-center rounded-xl p-2 outline-none transition-colors  duration-200 hover:bg-surface aria-selected:cursor-default aria-selected:bg-surface aria-selected:shadow-md",
  },
});

const { list, root, panel, tab } = tabs();

export const TabsRoot = forwardRef<
  ElementRef<typeof AriaTabsRoot>,
  Omit<ComponentPropsWithoutRef<typeof AriaTabsRoot>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AriaTabsRoot ref={ref} {...props} className={root({ className })}>
    {children}
  </AriaTabsRoot>
));

TabsRoot.displayName = AriaTabsRoot.displayName;

export const TabList = forwardRef<
  ElementRef<typeof AriaTabList>,
  Omit<ComponentPropsWithoutRef<typeof AriaTabList>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AriaTabList ref={ref} {...props} className={list({ className })}>
    {children}
  </AriaTabList>
));

TabList.displayName = AriaTabList.displayName;

export const Tab = forwardRef<
  ElementRef<typeof AriaTab>,
  Omit<ComponentPropsWithoutRef<typeof AriaTab>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AriaTab ref={ref} {...props} className={tab({ className })}>
    {children}
  </AriaTab>
));

Tab.displayName = AriaTab.displayName;

export const TabPanel = forwardRef<
  ElementRef<typeof AriaTabPanel>,
  Omit<ComponentPropsWithoutRef<typeof AriaTabPanel>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AriaTabPanel ref={ref} {...props} className={panel({ className })}>
    {children}
  </AriaTabPanel>
));

TabPanel.displayName = AriaTabPanel.displayName;
