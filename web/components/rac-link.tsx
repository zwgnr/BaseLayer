import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

export const RACLink = ({ componentName }: { componentName: string }) => (
	<Link
		className="flex items-center gap-1 font-semibold text-fg-muted text-sm no-underline hover:text-fg"
		href={`https://react-spectrum.adobe.com/react-aria/${componentName}.html`}
		target="_blank"
		rel="noopener noreferrer"
	>
		RAC Docs
		<ArrowUpRightIcon className="size-4" />
	</Link>
);