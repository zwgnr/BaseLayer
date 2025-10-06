import { Badge } from "@baselayer/components";

import { readFileSync } from "node:fs";
import { join } from "node:path";

interface ComponentMetadataProps {
	componentId: string;
	showTitle?: boolean;
	showDescription?: boolean;
	showCategory?: boolean;
	showStatus?: boolean;
	showTags?: boolean;
}

interface RegistryItem {
	name: string;
	title?: string;
	description?: string;
	categories?: string[];
	meta?: {
		status?: string;
		tags?: string[];
	};
}

export async function ComponentMetadata({
	componentId,
	showTitle = false,
	showDescription = true,
	showCategory = false,
	showStatus = false,
	showTags = false,
}: ComponentMetadataProps) {
	// Read from shadcn registry for metadata
	const shadcnRegistryPath = join(process.cwd(), "public/r/registry.json");
	const shadcnRegistryContent = readFileSync(shadcnRegistryPath, "utf8");
	const shadcnRegistry = JSON.parse(shadcnRegistryContent);

	const item = shadcnRegistry.items?.find(
		(i: RegistryItem) => i.name === componentId,
	);
	if (!item) {
		return null;
	}

	const { title, description, categories, meta } = item;

	return (
		<div className="not-prose flex flex-col">
			{showTitle && title && (
				<h1 className="font-bold text-3xl capitalize tracking-tight">
					{title}
				</h1>
			)}

			{showDescription && description && (
				<p className="-mt-4 text-muted-foreground">{description}</p>
			)}

			<div className="flex flex-wrap items-center gap-2">
				{showCategory && categories && categories.length > 0 && (
					<Badge variant="neutral" className="capitalize">
						{categories[0]}
					</Badge>
				)}

				{showStatus && meta?.status && (
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
					meta?.tags &&
					meta.tags.length > 0 &&
					meta.tags.map((tag: string) => (
						<Badge key={tag} variant="neutral" className="text-xs">
							{tag}
						</Badge>
					))}
			</div>
		</div>
	);
}
