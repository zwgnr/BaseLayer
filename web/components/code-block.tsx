import { codeToHtml } from "shiki";

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

	// biome-ignore lint/security/noDangerouslySetInnerHtml: fine
	return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
