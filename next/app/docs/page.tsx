import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-12 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-500 rounded"></div>
          <span className="text-xl font-bold">BaseLayer</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/docs" className="text-emerald-400 font-medium">
            Docs
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Everything you need to know about BaseLayer components.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/docs/intro"
            className="block p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-emerald-500 transition-colors group"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400">
              Introduction
            </h3>
            <p className="text-gray-400">
              Get started with BaseLayer and learn the fundamentals.
            </p>
          </Link>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg opacity-50">
            <h3 className="text-xl font-semibold mb-2 text-gray-500">
              Components
            </h3>
            <p className="text-gray-600">
              Coming soon - Component documentation and examples.
            </p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg opacity-50">
            <h3 className="text-xl font-semibold mb-2 text-gray-500">
              Themes
            </h3>
            <p className="text-gray-600">
              Coming soon - Theming and customization guide.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 