export default function DocsPage() {
  return (
    <div className="px-8 py-12">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-gray-400 mb-8">
            Everything you need to know about BaseLayer components.
          </p>
        </div>

        {/* Quick Start Section */}
        <div className="mt-12 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">
            Quick Start
          </h2>
          <p className="text-gray-300 mb-4">
            Get started with BaseLayer in seconds using our VSCode extension:
          </p>
          <div className="border border-gray-700 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-400 mb-2">
              # Open Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
            </div>
            <div className="text-emerald-400">BaseLayer: init</div>
          </div>
        </div>
      </div>
    </div>
  );
}
