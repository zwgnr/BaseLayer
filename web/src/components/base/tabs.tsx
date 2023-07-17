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
    root: "flex w-full flex-col items-start",
    list: "relative inline-flex w-72 items-center justify-between rounded-md p-1",
    tab: "relative flex w-1/3 cursor-pointer justify-center rounded-md border-primary p-2  outline-none transition-colors duration-200 hover:bg-surface-2 aria-selected:cursor-default aria-selected:rounded-none aria-selected:border-b-2 aria-selected:hover:bg-transparent",
    panel:
      "focus-visible:ring-ring borderp-4 mt-4 w-96 rounded-xl focus-visible:outline-none focus-visible:ring-2",
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

export { Tab, TabList, TabPanel, TabsRoot };
