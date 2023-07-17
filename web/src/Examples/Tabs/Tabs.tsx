import { Tab, TabList, TabPanel, TabsRoot } from "@/components/base/tabs";

export const Tabs = () => (
  <TabsRoot>
    <TabList aria-label="Dashbord Panels">
      <Tab id="overview">Overview</Tab>
      <Tab id="usage">Usage</Tab>
      <Tab id="settings">Settings</Tab>
    </TabList>
    <TabPanel id="overview">Overview Content</TabPanel>
    <TabPanel id="usage">Usage Content</TabPanel>
    <TabPanel id="settings">Settings Content</TabPanel>
  </TabsRoot>
);
