import Link from "next/link";

export default function DocsPage() {
	return (
		<div className="px-8 py-12">
			<div className="max-w-4xl">
				<div className="mb-8">
					<h1 className="mb-4 font-bold text-4xl md:text-5xl">Documentation</h1>
				</div>
				<div className="mt-12 rounded-lg border p-6">
					<Link href="/docs/intro">Get Started</Link>
				</div>
			</div>
		</div>
	);
}
