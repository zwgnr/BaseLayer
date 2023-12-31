import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabsRoot,
  type TabListProps as AriaTabListProps,
  type TabPanelProps as AriaTabPanelProps,
  type TabProps as AriaTabProps,
  type TabsProps as AriaTabsProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const tabs = tv({
  slots: {
    root: "flex w-full flex-col items-start",
    list: "relative inline-flex w-72 items-center justify-between rounded-md p-1",
    tab: "relative flex w-1/3 cursor-pointer justify-center rounded-md border-primary p-2 outline-none ring-focus  ring-offset-2 ring-offset-surface transition-colors duration-200 aria-selected:cursor-default aria-selected:rounded-none aria-selected:border-b-2 data-[hovered]:bg-surface-2 data-[focus-visible]:ring-2 data-[hovered]:aria-selected:bg-transparent",
    panel:
      "mt-4 w-96 rounded-xl p-4 outline-none ring-focus data-[focus-visible]:ring-2",
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
