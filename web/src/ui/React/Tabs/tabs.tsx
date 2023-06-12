import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs as TabsRoot,
} from "@ark-ui/react";
import { tabsPotion } from "@potions/tabsPotion";

const { list, trigger, content, indicator } = tabsPotion();

const items = [
  { value: "react", name: "React" },
  { value: "solid", name: "Solid" },
  { value: "vue", name: "Vue" },
];

export const Tabs = () => (
  <TabsRoot defaultValue={"react"}>
    <TabList className={list()}>
      {items.map((item) => (
        <TabTrigger className={trigger()} value={item.value}>
          {item.name}
        </TabTrigger>
      ))}
      <TabIndicator className={indicator()} />
    </TabList>
    {items.map((item) => (
      <TabContent className={content()} value={item.value}>
        {item.name} Content
      </TabContent>
    ))}
  </TabsRoot>
);
