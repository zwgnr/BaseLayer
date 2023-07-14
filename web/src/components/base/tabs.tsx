import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabListProps as AriaTabListProps,
  TabPanel as AriaTabPanel,
  TabPanelProps as AriaTabPanelProps,
  TabProps as AriaTabProps,
  TabsProps as AriaTabsProps,
  Tabs as AriaTabsRoot,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const tabs = tv({
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

interface TabsProps extends Omit<AriaTabsProps, "className"> {
  className?: string;
}

const TabsRoot = ({ children, className, ...props }: TabsProps) => (
  <AriaTabsRoot {...props} className={root({ className })}>
    {children}
  </AriaTabsRoot>
);

TabsRoot.displayName = TabsRoot;

interface TabListProps<T> extends Omit<AriaTabListProps<T>, "className"> {
  className?: string;
}

const TabList = <T extends object>({
  children,
  className,
  ...props
}: TabListProps<T>) => (
  <AriaTabList {...props} className={list({ className })}>
    {children}
  </AriaTabList>
);

TabList.displayName = TabList;

interface TabProps extends Omit<AriaTabProps, "className"> {
  className?: string;
}

const Tab = ({ children, className, ...props }: TabProps) => (
  <AriaTab {...props} className={tab({ className })}>
    {children}
  </AriaTab>
);

Tab.displayName = Tab;

interface TabPanelProps extends Omit<AriaTabPanelProps, "className"> {
  className?: string;
}

const TabPanel = ({ children, className, ...props }: TabPanelProps) => (
  <AriaTabPanel {...props} className={panel({ className })}>
    {children}
  </AriaTabPanel>
);

TabPanel.displayName = TabPanel;

export { TabsRoot, TabList, Tab, TabPanel };
