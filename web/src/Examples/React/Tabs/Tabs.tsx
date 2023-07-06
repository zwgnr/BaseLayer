import { Tab, TabList, TabPanel, TabsRoot } from "@/potions/tabs";

const items = [
  { value: "react", name: "React" },
  { value: "solid", name: "Solid" },
  { value: "vue", name: "Vue" },
];

export const Tabs = () => (
  <TabsRoot>
    <TabList aria-label="Dashbord Panels">
      <Tab id="FoR">Overview</Tab>
      <Tab id="MaR">Activity</Tab>
      <Tab id="Emp">Usage</Tab>
    </TabList>
    <TabPanel id="FoR">
      Arma virumque cano, Troiae qui primus ab
      oris.fffffffffffffffffffffffffffffffffffff
    </TabPanel>
    <TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
    <TabPanel id="Emp">Alea jacta est.</TabPanel>
  </TabsRoot>
);
