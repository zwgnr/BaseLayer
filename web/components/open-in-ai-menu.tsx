"use client";

import {
	Button,
	MenuContent,
	MenuItem,
	MenuTrigger,
} from "@baselayer/components";
import { ArrowUpRight, Share } from "lucide-react";

interface OpenInAiMenuProps {
	pageTitle: string;
	pageUrl: string;
}

const AI_SERVICES = [
	{
		name: "ChatGPT",
		baseUrl: "https://chatgpt.com/",
		urlPattern: "?hints=search&q=",
		messageTemplate: (url: string) =>
			`Read this BaseLayer documentation: ${url}`,
	},
	{
		name: "Claude",
		baseUrl: "https://claude.ai/new",
		urlPattern: "?q=",
		messageTemplate: (url: string) =>
			`Read this BaseLayer documentation: ${url}`,
	},
	{
		name: "T3 Chat",
		baseUrl: "https://t3.chat/new",
		urlPattern: "?q=",
		messageTemplate: (url: string) =>
			`Read this BaseLayer documentation: ${url}`,
	},
] as const;

export function OpenInAiMenu({ pageTitle, pageUrl }: OpenInAiMenuProps) {
	const baseUrl = "https://baselayer.dev";
	const fullUrl = `${baseUrl}${pageUrl}`;

	const openInAI = (service: (typeof AI_SERVICES)[number]) => {
		const message = service.messageTemplate(fullUrl);
		const finalUrl = `${service.baseUrl}${service.urlPattern}${encodeURIComponent(message)}`;

		window.open(finalUrl, "_blank");
	};

	return (
		<MenuTrigger>
			<Button
				variant="ghost"
				className="flex items-center gap-2 font-semibold text-fg-muted text-sm hover:text-fg data-[pressed]:bg-secondary"
			>
				Open in AI <Share size={14} />
			</Button>
			<MenuContent>
				{AI_SERVICES.map((service) => (
					<MenuItem
						key={service.name}
						onAction={() => openInAI(service)}
						className="flex items-center gap-2"
					>
						<span className="font-medium">{service.name}</span>
						<span className="text-muted-foreground text-sm">
							<ArrowUpRight size={14} />
						</span>
					</MenuItem>
				))}
			</MenuContent>
		</MenuTrigger>
	);
}
