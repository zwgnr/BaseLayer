import { NextResponse } from "next/server";

import { COMPONENTS } from "@baselayer/components";

/**
 * Get the appropriate base URL for the current environment
 * - Production: Custom domain
 * - Preview: Vercel preview URL
 * - Local: localhost
 */
function getBaseUrl(): string {
	// Production environment
	if (process.env.VERCEL_ENV === "production") {
		return "https://baselayer.dev";
	}

	// Preview environment (on Vercel)
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}

	// Local development
	return "http://localhost:3000";
}

export async function GET() {
	const baseUrl = getBaseUrl();
	const components = COMPONENTS;

	const wellKnownSpec = {
		"@context": "https://www.w3.org/ns/activitystreams",
		type: "Service",
		name: "BaseLayer Component System",
		summary: "A component system for the AI era",
		version: "2.0.0",
		generator: {
			type: "Application",
			name: "BaseLayer",
			version: "2.0.0",
			url: baseUrl,
		},
		endpoints: {
			components: `${baseUrl}/registry.json`,
			template: `${baseUrl}/templates/{name}.txt`,
			tailwind: `${baseUrl}/tailwind.css`,
			llms: `${baseUrl}/llms.txt`,
		},
		components: components.reduce(
			(acc, comp) => {
				acc[comp.id] = {
					name: comp.meta.name,
					category: comp.meta.category,
					description: comp.meta.description,
					endpoints: {
						template: `${baseUrl}/templates/${comp.id}.txt`,
					},
				};
				return acc;
			},
			{} as Record<
				string,
				{
					name: string;
					category: string;
					description: string;
					endpoints: {
						template: string;
					};
				}
			>,
		),
		metadata: {
			framework: "next.js",
			ui_library: "react-aria-components",
			styling: "tailwindcss",
			typescript: true,
			accessibility: true,
			generatedAt: new Date().toISOString(),
		},
		links: [
			{
				rel: "self",
				type: "application/json",
				href: `${baseUrl}/.well-known/baselayer`,
			},
			{
				rel: "components",
				type: "application/json",
				href: `${baseUrl}/registry.json`,
			},
			{
				rel: "tailwind",
				type: "text/css",
				href: `${baseUrl}/tailwind.css`,
			},
			{
				rel: "llms-txt",
				type: "text/plain",
				href: `${baseUrl}/llms.txt`,
			},
		],
	};

	return NextResponse.json(wellKnownSpec, {
		headers: {
			"Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
			"Content-Type": "application/json",
		},
	});
}
