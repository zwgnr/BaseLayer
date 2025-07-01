import { getTailwindCSS } from "@baselayer/components";

import { CodeBlock } from "./code-block";

export const CSSContentDisplay = () => {
	// Get inlined CSS content
	const cssContent = getTailwindCSS();

	return <CodeBlock code={cssContent} lang="css" />;
};
