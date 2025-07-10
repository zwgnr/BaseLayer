import { Accordion } from "../core/accordion/accordion";

export const AccordionBase = () => {
	return (
		<Accordion className="size-72 lg:size-80 xl:size-96" title="How do I cancel my subscription?">
			You can cancel your subscription at any time by going to your account
			settings and clicking "Cancel Subscription". Your access will continue
			until the end of your current billing period, and you won't be charged
			again. All your data will be safely stored for 30 days in case you decide
			to reactivate.
		</Accordion>
	);
};
