import Link from "next/link";

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-12 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-500 rounded"></div>
          <span className="text-xl font-bold">BaseLayer</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/docs" className="text-gray-400 hover:text-white font-medium">
            Docs
          </Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 py-4 border-b border-gray-800">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/docs" className="text-gray-400 hover:text-emerald-400">
            Docs
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-emerald-400">Introduction</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Introduction to BaseLayer
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            BaseLayer is a component system for the AI era. Built with React Aria Components 
            and TailwindCSS, it provides beautiful, accessible primitives that you can 
            customize and compose to build modern applications.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-emerald-400">
                What is BaseLayer?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BaseLayer is not a traditional UI library. Instead, it's a collection of 
                copy-and-paste components that you own and control. Each component is built 
                with accessibility in mind, powered by React Aria Components, and styled 
                with TailwindCSS.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The components are designed to be composable, themeable, and fully customizable 
                to match your design system and brand.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-emerald-400">
                Key Features
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Accessible by default</strong> - Built on React Aria Components</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Fully customizable</strong> - Copy, paste, and modify to fit your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Theme support</strong> - Built-in dark mode and theming capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>VSCode Extension</strong> - Seamless workflow integration</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-emerald-400">
                Getting Started
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To get started with BaseLayer, install the VSCode extension and use the 
                command palette to initialize your project:
              </p>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400 mb-2"># Open Command Palette (Ctrl+Shift+P)</div>
                <div className="text-emerald-400">BaseLayer: init</div>
              </div>
            </section>

            <section className="pt-8 border-t border-gray-800">
              <div className="flex justify-between items-center">
                <Link 
                  href="/docs"
                  className="text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  ← Back to Docs
                </Link>
                <div className="text-gray-500 text-sm">
                  Next: Components (Coming Soon)
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 