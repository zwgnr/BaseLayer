import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { getPageNavigation } from "@/lib/navigation";
import { source } from "@/lib/source";

import { ComponentMetadata } from "@/components/component-metadata";
import { DocsPage } from "@/components/docs-page";
import { mdxComponents } from "@/components/mdx-components";
import { OpenInAiMenu } from "@/components/open-in-ai-menu";
import { RACLink } from "@/components/rac-link";

// Ensure strict static-only build
export const dynamic = "error";

interface PageProps {
	params: Promise<{
		slug?: string[];
	}>;
}

// Convert PascalCase title to kebab-case component ID
function titleToComponentId(title: string): string {
	//  special cases
	if (title === "ComboBox") {
		return "combobox";
	}

	return (
		title
			// Insert a hyphen before uppercase letters that follow lowercase letters
			.replace(/([a-z])([A-Z])/g, "$1-$2")
			.toLowerCase()
	);
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params;
	const page = source.getPage(slug);

	if (!page) {
		notFound();
	}

	const toc = page.data.toc || [];
	const MDXContent = page.data.body;
	const navigation = getPageNavigation(page.url);
	const componentId = titleToComponentId(page.data.title);
	const isComponentPage = page.url.includes("/docs/components/");

	return (
		<DocsPage toc={toc} navigation={navigation}>
			<div className="prose dark:prose-invert max-w-none px-6 pb-12 md:px-12">
				<h1 className="font-bold text-3xl tracking-tigh">{page.data.title}</h1>

				{/* Component metadata for component pages only */}
				{isComponentPage && <ComponentMetadata componentId={componentId} />}

				{/* Links section - always show for all docs pages */}
				<div className="my-4 flex items-center gap-4 ">
					{page.data.isRAC && <RACLink componentName={page.data.title} />}
					<OpenInAiMenu pageTitle={page.data.title} pageUrl={page.url} />
				</div>

				<MDXContent components={mdxComponents} />
			</div>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const page = source.getPage(slug);

	if (!page) notFound();

	return {
		title: `${page.data.title} - BaseLayer`,
		description: page.data.description,
	};
}
