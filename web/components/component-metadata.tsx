import { Badge } from "@baselayer/components";

import { getRegistry } from "../lib/component-data";

interface ComponentMetadataProps {
	componentId: string;
	showTitle?: boolean;
	showDescription?: boolean;
	showCategory?: boolean;
	showStatus?: boolean;
	showTags?: boolean;
	showVersion?: boolean;
}

export async function ComponentMetadata({
	componentId,
	showTitle = false,
	showDescription = true,
	showCategory = false,
	showStatus = false,
	showTags = false,
	showVersion = false,
}: ComponentMetadataProps) {
	const registry = await getRegistry();
	const component = registry.components.find(
		(c) => c.id === componentId.toLowerCase(),
	);
	if (!component) {
		return null;
	}

	const { meta } = component;

	return (
		<div className="not-prose flex flex-col">
			{showTitle && (
				<h1 className="font-bold text-3xl capitalize tracking-tight">
					{meta.name}
				</h1>
			)}

			{showDescription && (
				<p className="-mt-4 text-muted-foreground">{meta.description}</p>
			)}

			<div className="flex flex-wrap items-center gap-2">
				{showCategory && (
					<Badge variant="neutral" className="capitalize">
						{meta.category}
					</Badge>
				)}

				{showStatus && (
					<Badge
						variant={
							meta.status === "stable"
								? "attention"
								: meta.status === "beta"
									? "neutral"
									: meta.status === "alpha"
										? "neutral"
										: "danger"
						}
						className="capitalize"
					>
						{meta.status}
					</Badge>
				)}

				{showTags &&
					meta.tags.map((tag: string) => (
						<Badge key={tag} variant="neutral" className="text-xs">
							{tag}
						</Badge>
					))}
			</div>
		</div>
	);
}
