import { getBaseUrl } from "../lib/get-base-url";
import { CodeBlock } from "./code-block";

export const CSSContentDisplay = async () => {
	// Fetch CSS content from the static endpoint
	const baseUrl = getBaseUrl();
	const response = await fetch(`${baseUrl}/tailwind.css`, {
		// Add cache control for better performance
	//	cache: "force-cache",
	});

	if (!response.ok) {
		throw new Error(
			`Failed to fetch CSS: ${response.status} ${response.statusText}`,
		);
	}

	const cssContent = await response.text();

	return <CodeBlock code={cssContent} lang="css" />;
};
