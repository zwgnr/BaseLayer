import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

import { getComponentSource, getInstallData } from "../lib/component-data";
import { CodeBlock } from "./code-block";
import { ComponentPreview as ClientComponentPreview } from "./component-preview";

export const ComponentPreview = async ({
  children,
  sourceName,
  exampleSource,
}: {
  name: string;
  children: React.ReactNode;
  sourceName?: string;
  exampleSource?: string;
  description?: string;
}) => {
  let sourceCode: string | undefined;

  if (exampleSource) {
    sourceCode = exampleSource;
  } else if (sourceName) {
    try {
      sourceCode = await getComponentSource(sourceName);
    } catch (error) {
      console.error(`Failed to load source for ${sourceName}:`, error);
      sourceCode = undefined;
    }
  }

  return (
    <ClientComponentPreview
      sourceCodeElement={
        sourceCode ? <CodeBlock code={sourceCode} /> : undefined
      }
    >
      {children}
    </ClientComponentPreview>
  );
};

export const ComponentSource = async ({ name }: { name: string }) => {
  const sourceCode = await getComponentSource(name);

  return (
    <div className="relative mb-6">
      <div className="rounded-lg border border-gray-700 bg-gray-900 text-sm">
        <CodeBlock code={sourceCode} />
      </div>
    </div>
  );
};

export const Installation = async ({ name }: { name: string }) => {
  const data = await getInstallData(name);

  if (!data) {
    return (
      <div className="mb-6 rounded-lg border border-gray-700 bg-gray-900 p-4">
        <p className="text-gray-400">
          Installation data not available for {name}
        </p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="mb-4 font-semibold text-lg text-white">Installation</h3>

      <div className="mb-4">
        <h4 className="mb-2 font-medium text-gray-300 text-sm">
          Quick Install
        </h4>
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-3">
          <code className="text-emerald-400 text-sm">{data.cliCommand}</code>
        </div>
      </div>

      {data.dependencies.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 font-medium text-gray-300 text-sm">
            Dependencies
          </h4>
          <div className="rounded-lg border border-gray-700 bg-gray-900 p-3">
            <code className="text-emerald-400 text-sm">
              pnpm install {data.dependencies.join(" ")}
            </code>
          </div>
        </div>
      )}

      <div className="mb-4">
        <h4 className="mb-2 font-medium text-gray-300 text-sm">Usage</h4>
        <div className="rounded-lg border border-gray-700 bg-gray-900 text-sm">
          <CodeBlock code={data.usageExample} />
        </div>
      </div>
    </div>
  );
};

export const RACLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    className="-mt-4 mb-8 flex items-center gap-1 font-semibold text-fg-muted no-underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <ArrowUpRightIcon className="size-4" />
  </Link>
);

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
  ComponentSource,
  Installation,
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
  RACLink,
};
