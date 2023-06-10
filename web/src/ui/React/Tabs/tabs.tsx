import {
  TabContent as ArkContent,
  TabIndicator as ArkIndicator,
  TabList as ArkList,
  Tabs as ArkTabs,
  TabTrigger as ArkTrigger,
} from "@ark-ui/react";
import { tabsPotion } from "@potions/tabsPotion";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { tv } from "tailwind-variants";

const Tabs = ArkTabs;

const { tabsList, tabsTrigger, tabsContent, tabsIndicator } = tabsPotion();

const TabsList = forwardRef<
  ElementRef<typeof ArkList>,
  ComponentPropsWithoutRef<typeof ArkList>
>(({ className, ...props }, ref) => (
  <ArkList
    ref={ref}
    className={tabsList({ className: className })}
    {...props}
  />
));
TabsList.displayName = ArkList.displayName;

const TabsTrigger = forwardRef<
  ElementRef<typeof ArkTrigger>,
  ComponentPropsWithoutRef<typeof ArkTrigger>
>(({ className, ...props }, ref) => (
  <ArkTrigger
    ref={ref}
    className={tabsTrigger({ className: className })}
    {...props}
  />
));
TabsTrigger.displayName = ArkTrigger.displayName;

const TabsContent = forwardRef<
  ElementRef<typeof ArkContent>,
  ComponentPropsWithoutRef<typeof ArkContent>
>(({ className, ...props }, ref) => (
  <ArkContent
    ref={ref}
    className={tabsContent({ className: className })}
    {...props}
  />
));
TabsContent.displayName = ArkContent.displayName;

const TabsIndicator = forwardRef<
  ElementRef<typeof ArkIndicator>,
  ComponentPropsWithoutRef<typeof ArkIndicator>
>(({ className, ...props }, ref) => (
  <ArkIndicator
    ref={ref}
    className={tabsIndicator({ className: className })}
    {...props}
  />
));
TabsIndicator.displayName = ArkIndicator.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator };
