import { source } from "./source";

export interface NavigationPage {
	title: string;
	url: string;
}

export interface PageNavigation {
	previous?: NavigationPage;
	next?: NavigationPage;
}

export function getPageNavigation(currentUrl: string): PageNavigation {
	const pages = source.getPages();

	// Create ordered list following sidebar structure
	const introDocs = pages
		.filter((page) => !page.url.startsWith("/docs/components"))
		.sort((a, b) => {
			// Define specific order for intro docs
			const order = ["/docs/intro", "/docs/usage", "/docs/mcp", "/docs/styles"];
			const aIndex = order.indexOf(a.url);
			const bIndex = order.indexOf(b.url);

			if (aIndex !== -1 && bIndex !== -1) {
				return aIndex - bIndex;
			}
			if (aIndex !== -1) return -1;
			if (bIndex !== -1) return 1;
			return a.url.localeCompare(b.url);
		});

	const componentDocs = pages
		.filter((page) => page.url.startsWith("/docs/components"))
		.sort((a, b) => a.data.title.localeCompare(b.data.title));

	// Combine in order: intro docs first, then components
	const orderedPages = [...introDocs, ...componentDocs];

	// Find current page index
	const currentIndex = orderedPages.findIndex(
		(page) => page.url === currentUrl,
	);

	if (currentIndex === -1) {
		return {};
	}

	const previous =
		currentIndex > 0
			? {
					title: orderedPages[currentIndex - 1].data.title,
					url: orderedPages[currentIndex - 1].url,
				}
			: undefined;

	const next =
		currentIndex < orderedPages.length - 1
			? {
					title: orderedPages[currentIndex + 1].data.title,
					url: orderedPages[currentIndex + 1].url,
				}
			: undefined;

	return { previous, next };
}
