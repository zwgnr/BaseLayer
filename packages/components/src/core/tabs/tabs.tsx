"use client";

import {
	Tab as AriaTab,
	TabList as AriaTabList,
	type TabListProps as AriaTabListProps,
	TabPanel as AriaTabPanel,
	type TabPanelProps as AriaTabPanelProps,
	type TabProps as AriaTabProps,
	type TabsProps as AriaTabsProps,
	Tabs as AriaTabsRoot,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const tabs = tv({
	slots: {
		root: "flex w-full flex-col items-start",
		list: "relative inline-flex items-center justify-between gap-6 rounded-md p-1",
		tab: "relative flex w-fit cursor-pointer justify-center rounded-2xl border-primary pb-0.5 font-semibold text-fg-muted outline-none ring-focus ring-offset-2 ring-offset-surface transition-colors duration-200 aria-selected:cursor-default aria-selected:rounded-none aria-selected:border-b-2 aria-selected:pb-0 aria-selected:text-primary aria-selected:hover:bg-transparent data-[hovered]:text-primary data-[focus-visible]:ring-2",
		panel:
			"mt-4 w-96 rounded-xl p-4 outline-none ring-focus data-[focus-visible]:ring-2",
	},
});

const styles = tabs();

interface TabsProps extends Omit<AriaTabsProps, "className"> {
	className?: string;
}

const TabsRoot = ({ children, className, ...props }: TabsProps) => (
	<AriaTabsRoot {...props} className={styles.root({ className })}>
		{children}
	</AriaTabsRoot>
);

interface TabListProps<T> extends Omit<AriaTabListProps<T>, "className"> {
	className?: string;
}

const TabList = <T extends object>({
	children,
	className,
	...props
}: TabListProps<T>) => (
	<AriaTabList {...props} className={styles.list({ className })}>
		{children}
	</AriaTabList>
);

interface TabProps extends Omit<AriaTabProps, "className"> {
	className?: string;
}

const Tab = ({ children, className, ...props }: TabProps) => (
	<AriaTab {...props} className={styles.tab({ className })}>
		{children}
	</AriaTab>
);

interface TabPanelProps extends Omit<AriaTabPanelProps, "className"> {
	className?: string;
}

const TabPanel = ({ children, className, ...props }: TabPanelProps) => (
	<AriaTabPanel {...props} className={styles.panel({ className })}>
		{children}
	</AriaTabPanel>
);

export { Tab, TabList, TabPanel, TabsRoot };
export type { TabsProps, TabListProps, TabProps, TabPanelProps }; 