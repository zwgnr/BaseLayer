import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { getPageNavigation } from "@/lib/navigation";
import { source } from "@/lib/source";

import { ComponentMetadata } from "@/components/component-metadata";
import { DocsPage } from "@/components/docs-page";
import { mdxComponents } from "@/components/mdx-components";
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

	// Check if this is a component page
	const isComponentPage = page.data?.description?.includes("rac");
	const hasManualDescription =
		page.data.description && !page.data.description.includes("rac");
	const componentId = isComponentPage
		? titleToComponentId(page.data.title)
		: null;

	return (
		<DocsPage toc={toc} navigation={navigation}>
			<div className="prose dark:prose-invert max-w-none px-6 pb-12 md:px-12">
				<h1 className="font-bold text-3xl tracking-tigh">{page.data.title}</h1>
				{hasManualDescription && (
					<p className="-mt-4 text-muted-foreground">{page.data.description}</p>
				)}
				{isComponentPage && componentId && (
					<ComponentMetadata componentId={componentId} />
				)}
				{isComponentPage && <RACLink componentName={page.data.title} />}
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
		title: page.data.title,
		description: page.data.description,
	};
}
