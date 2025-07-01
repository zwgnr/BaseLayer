import { codeToHtml } from "shiki";

import { CodeBlockWithCopy } from "./code-block-client";

interface CodeBlockProps {
	code: string;
	lang?: string;
}

export const CodeBlock = async ({ code, lang = "tsx" }: CodeBlockProps) => {
	const html = await codeToHtml(code, {
		lang,
		themes: {
			light: "catppuccin-latte",
			dark: "catppuccin-frappe",
		},
		defaultColor: "light-dark()",
	});

	return <CodeBlockWithCopy code={code} html={html} />;
};
