import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

export const RACLink = ({ componentName }: { componentName: string }) => (
	<Link
		className="mt-4 mb-8 flex items-center gap-1 font-semibold text-fg-muted text-sm no-underline"
		href={`https://react-spectrum.adobe.com/react-aria/${componentName}.html`}
		target="_blank"
		rel="noopener noreferrer"
	>
		RAC Docs
		<ArrowUpRightIcon className="size-4" />
	</Link>
);