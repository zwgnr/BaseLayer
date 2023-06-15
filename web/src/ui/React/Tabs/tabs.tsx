import { tabsPotion } from "@/potions/tabsPotion";
import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs as TabsRoot,
} from "@ark-ui/react";

const { list, trigger, content, indicator } = tabsPotion();

const items = [
  { value: "react", name: "React" },
  { value: "solid", name: "Solid" },
  { value: "vue", name: "Vue" },
];

export const Tabs = () => (
  <TabsRoot defaultValue={"react"}>
    <TabList className={list()}>
      {items.map((item, id) => (
        <TabTrigger key={id} className={trigger()} value={item.value}>
          {item.name}
        </TabTrigger>
      ))}
      <TabIndicator className={indicator()} />
    </TabList>
    {items.map((item, id) => (
      <TabContent key={id} className={content()} value={item.value}>
        {item.name} Content
      </TabContent>
    ))}
  </TabsRoot>
);
