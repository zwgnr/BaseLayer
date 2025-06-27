"use client";

import { useState } from "react";

import { Check, Copy } from "lucide-react";

interface CodeBlockWithCopyProps {
	code: string;
	html: string;
}

const CopyButton = ({ code }: { code: string }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	return (
		<button
			type="button"
			onClick={handleCopy}
			className="absolute top-0 right-0 rounded-md p-2 text-fg-muted"
			title={copied ? "Copied!" : "Copy to clipboard"}
		>
			{copied ? (
				<Check className="size-4" />
			) : (
				<Copy className="size-4" />
			)}
		</button>
	);
};

export const CodeBlockWithCopy = ({ code, html }: CodeBlockWithCopyProps) => {
	return (
		<div className="relative">
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: fine */}
			<div dangerouslySetInnerHTML={{ __html: html }} />
			<CopyButton code={code} />
		</div>
	);
}; 