import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocsPage } from "@/components/docs-page";
import { mdxComponents } from "@/components/mdx-components";

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
        <h1 className="text-3xl font-bold tracking-tight">{page.data.title}</h1>
        {page.data.description && (
          <p className="-mt-4">{page.data.description}</p>
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
