import { Tab, TabList, TabPanel, TabsRoot } from "../core/tabs/tabs";

export const TabsExample = () => {
	return (
		<TabsRoot>
			<TabList>
				<Tab id="overview">Overview</Tab>
				<Tab id="features">Features</Tab>
				<Tab id="pricing">Pricing</Tab>
			</TabList>
			<TabPanel id="overview">
				<h3 className="mb-2 font-semibold text-lg">Overview</h3>
				<p className="text-fg-muted">
					Get started with our platform and explore all the features we have to offer.
				</p>
			</TabPanel>
			<TabPanel id="features">
				<h3 className="mb-2 font-semibold text-lg">Features</h3>
				<p className="text-fg-muted">
					Discover the powerful features that make our platform stand out from the rest.
				</p>
			</TabPanel>
			<TabPanel id="pricing">
				<h3 className="mb-2 font-semibold text-lg">Pricing</h3>
				<p className="text-fg-muted">
					Choose the plan that works best for you and your team.
				</p>
			</TabPanel>
		</TabsRoot>
	);
}; 