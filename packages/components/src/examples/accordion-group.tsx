import { Accordion, AccordionGroup } from "../core/accordion/accordion";

export const AccordionGroupExample = () => {
	return (
		<div className="h-[500px]">
			<AccordionGroup
				className="w-72 lg:w-80"
				defaultExpandedKeys={["getting-started"]}
			>
				<Accordion id="getting-started" title="Getting Started">
					<div className="space-y-3">
						<p>
							<strong>Quick Setup:</strong> Install our SDK with npm install
							@company/sdk
						</p>
						<p>
							<strong>API Key:</strong> Generate your API key from the dashboard
						</p>
						<p>
							<strong>First Request:</strong> Make your first API call in under
							5 minutes
						</p>
						<p>
							Our comprehensive documentation includes code examples in Python,
							JavaScript, and cURL. Start building in minutes with our
							interactive tutorials.
						</p>
					</div>
				</Accordion>
				<Accordion id="authentication" title="Authentication & Security">
					<div className="space-y-3">
						<p>
							<strong>API Keys:</strong> Secure your requests with bearer token
							authentication
						</p>
						<p>
							<strong>Rate Limits:</strong> 1,000 requests per minute on free
							tier, unlimited on pro
						</p>
						<p>
							<strong>Webhooks:</strong> Real-time notifications with 256-bit
							SSL encryption
						</p>
						<p>
							Enterprise-grade security with SOC 2 compliance, end-to-end
							encryption, and 99.9% uptime SLA.
						</p>
					</div>
				</Accordion>
				<Accordion id="integrations" title="Integrations & SDKs">
					<div className="space-y-3">
						<p>
							<strong>Official SDKs:</strong> JavaScript, Python, Ruby, Go, PHP
						</p>
						<p>
							<strong>Frameworks:</strong> React, Vue, Angular, Next.js
							components
						</p>
						<p>
							<strong>Platforms:</strong> Slack, Discord, Teams, Notion
							integrations
						</p>
						<p>
							Join 50,000+ developers using our APIs. Browse community-built
							packages and contribute to our open-source ecosystem.
						</p>
					</div>
				</Accordion>
			</AccordionGroup>
		</div>
	);
};
