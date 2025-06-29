import {
	getComponentSource,
	getExampleSource,
} from "../lib/component-data";
// Auto-generated examples map
import { exampleComponents } from "../lib/examples-map";
import { CodeBlock } from "./code-block";
import { ComponentMetadata } from "./component-metadata";
import { Preview } from "./preview";

export const ComponentPreview = async ({
	children,
	name,
	example,
}: {
	children?: React.ReactNode;
	name?: string;
	example?: string;
}) => {
	let sourceCode: string | undefined;
	let exampleComponent: React.ReactNode | undefined;

	if (example) {
		// Load example from registry
		try {
			sourceCode = await getExampleSource(example);
			const ExampleComponent =
				exampleComponents[example as keyof typeof exampleComponents];
			if (ExampleComponent) {
				exampleComponent = <ExampleComponent />;
			}
		} catch (error) {
			console.error(`Failed to load example ${example}:`, error);
		}
	} else if (name) {
		try {
			sourceCode = await getComponentSource(name);
		} catch (error) {
			console.error(`Failed to load source for ${name}:`, error);
			sourceCode = undefined;
		}
	}

	return (
		<div className="not-prose">
			<Preview
				sourceCodeElement={
					sourceCode ? <CodeBlock code={sourceCode} /> : undefined
				}
			>
				{exampleComponent || children}
			</Preview>
		</div>
	);
};

// Layout components
export const CodeTabs = ({ children }: { children: React.ReactNode }) => (
	<div className="mb-6 overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
		{children}
	</div>
);

export const TabsList = ({ children }: { children: React.ReactNode }) => (
	<div className="flex border-gray-700 border-b">{children}</div>
);

export const TabsTrigger = ({ children }: { children: React.ReactNode }) => (
	<button
		type="button"
		className="border-transparent border-b-2 px-4 py-2 font-medium text-gray-400 text-sm hover:border-emerald-500 hover:bg-gray-800 hover:text-white"
	>
		{children}
	</button>
);

export const TabsContent = ({ children }: { children: React.ReactNode }) => (
	<div className="p-4">{children}</div>
);

export const Steps = ({ children }: { children: React.ReactNode }) => (
	<div className="mb-6 space-y-6">{children}</div>
);

export const Step = ({ children }: { children: React.ReactNode }) => (
	<div className="border-emerald-500 border-l-2 pb-6 pl-6">{children}</div>
);

export const Pre = ({ children }: { children: React.ReactNode }) => (
	<pre className="mb-4 overflow-x-auto rounded-lg border border-gray-700 p-4">
		{children}
	</pre>
);

export const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded px-2 py-1 font-mono text-emerald-400 text-sm">
		{children}
	</code>
);

export const Ul = ({ children }: { children: React.ReactNode }) => (
	<ul className="mb-4 list-inside list-disc space-y-2">{children}</ul>
);

export const Li = ({ children }: { children: React.ReactNode }) => (
	<li>{children}</li>
);

// MDX Components export
export const mdxComponents = {
	ComponentPreview,
	ComponentMetadata,
	CodeTabs,
	TabsList,
	TabsTrigger,
	TabsContent,
	Steps,
	Step,
	pre: Pre,
	code: Code,
	ul: Ul,
	li: Li,
};
