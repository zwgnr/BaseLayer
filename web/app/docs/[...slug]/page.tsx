import { notFound } from "next/navigation";

import type { Metadata } from "next";

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

export default async function Page({ params }: PageProps) {
	const { slug } = await params;
	const page = source.getPage(slug);

	if (!page) {
		notFound();
	}

	const toc = page.data.toc || [];
	const MDXContent = page.data.body;

	return (
		<DocsPage toc={toc}>
			<div className="prose dark:prose-invert max-w-none px-12 pb-12">
				<h1 className="font-bold text-3xl tracking-tigh">{page.data.title}</h1>
				{/* {page.data.description && (
          <p className="-mt-4">{page.data.description}</p>
        )} */}
				<ComponentMetadata componentId={page.data.title.toLowerCase()} />
				{page.data?.description?.includes("rac") && (
					<RACLink componentName={page.data.title} />
				)}
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
