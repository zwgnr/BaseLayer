import { getComponentSource, getInstallData } from "../lib/component-data";
import { ComponentPreview as ClientComponentPreview } from "./component-preview";
import { CodeBlock } from "./code-block";

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
      <div className="text-sm bg-gray-900 border border-gray-700 rounded-lg">
        <CodeBlock code={sourceCode} />
      </div>
    </div>
  );
};

export const Installation = async ({ name }: { name: string }) => {
  const data = await getInstallData(name);

  if (!data) {
    return (
      <div className="mb-6 p-4 bg-gray-900 border border-gray-700 rounded-lg">
        <p className="text-gray-400">
          Installation data not available for {name}
        </p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-300 mb-2">
          Quick Install
        </h4>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
          <code className="text-emerald-400 text-sm">{data.cliCommand}</code>
        </div>
      </div>

      {data.dependencies.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-300 mb-2">
            Dependencies
          </h4>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
            <code className="text-emerald-400 text-sm">
              pnpm install {data.dependencies.join(" ")}
            </code>
          </div>
        </div>
      )}

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-300 mb-2">Usage</h4>
        <div className="text-sm bg-gray-900 border border-gray-700 rounded-lg">
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
  <a
    className="text-fg-muted no-underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

// Layout components
export const CodeTabs = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
    {children}
  </div>
);

export const TabsList = ({ children }: { children: React.ReactNode }) => (
  <div className="flex border-b border-gray-700">{children}</div>
);

export const TabsTrigger = ({ children }: { children: React.ReactNode }) => (
  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 border-b-2 border-transparent hover:border-emerald-500">
    {children}
  </button>
);

export const TabsContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);

export const Steps = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-6 mb-6">{children}</div>
);

export const Step = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-2 border-emerald-500 pl-6 pb-6">{children}</div>
);

export const Pre = ({ children }: { children: React.ReactNode }) => (
  <pre className="border border-gray-700 rounded-lg p-4 overflow-x-auto mb-4">
    {children}
  </pre>
);

export const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="px-2 py-1 rounded text-sm font-mono text-emerald-400">
    {children}
  </code>
);

export const Ul = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc list-inside space-y-2 mb-4">{children}</ul>
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
