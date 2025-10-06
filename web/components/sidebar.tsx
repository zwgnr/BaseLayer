import { source } from "@/lib/source";

import { SearchDialog } from "./search";
import { SidebarLink } from "./sidebar-link";

export function Sidebar() {
	const pages = source.getPages();

	// Separate docs into categories
	const introDocs = pages
		.filter((page) => !page.url.startsWith("/docs/components"))
		.sort((a, b) => {
			const order = ["/docs/intro", "/docs/usage", "/docs/styles"];
			const aIndex = order.indexOf(a.url);
			const bIndex = order.indexOf(b.url);

			if (aIndex !== -1 && bIndex !== -1) {
				return aIndex - bIndex;
			}
			if (aIndex !== -1) return -1;
			if (bIndex !== -1) return 1;
			return a.url.localeCompare(b.url);
		});
	const componentDocs = pages.filter((page) =>
		page.url.startsWith("/docs/components"),
	);

	return (
		<div className="sticky top-[73px] flex h-[calc(100vh-73px)] w-64 flex-col border-border/50 border-r">
			{/* Fixed Search Section */}
			<div className="p-6 pb-0">
				<SearchDialog />
			</div>

			{/* Scrollable Navigation Section */}
			<div className="flex-1 overflow-y-auto">
				<nav className="space-y-4 p-6">
					<div>
						<h3 className="mb-3 font-semibold text-fg-muted text-xs uppercase tracking-wide">
							Getting Started
						</h3>
						<div className="space-y-1">
							{introDocs.map((page) => (
								<SidebarLink key={page.url} href={page.url}>
									{page.data.title}
								</SidebarLink>
							))}
						</div>
					</div>

					{/* Components */}
					{componentDocs.length > 0 && (
						<div>
							<h3 className="mb-3 font-semibold text-fg-muted text-xs uppercase tracking-wide">
								Components
							</h3>
							<div className="space-y-1">
								{componentDocs.map((page) => (
									<SidebarLink key={page.url} href={page.url}>
										{page.data.title}
									</SidebarLink>
								))}
							</div>
						</div>
					)}
				</nav>
			</div>
		</div>
	);
}
