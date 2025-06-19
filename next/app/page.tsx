import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <Image
            src="/bl.svg"
            alt="BaseLayer"
            width={32}
            height={32}
            className="dark:invert"
          />
          <span className="text-xl font-extrabold text-gray-300 dark:text-white">
            BaseLayer
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="/docs"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Docs
          </a>
          <button
            className="p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors backdrop-blur-sm"
            aria-label="Toggle theme"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-20 md:py-28 lg:py-36 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-6 leading-tight">
            A component system for the{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 bg-clip-text text-transparent">
              AI era
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Beautiful, accessible primates powered by react-aria-components and tailwindcss.
          </p>
          
          <button 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 rounded-full hover:from-emerald-700 hover:via-green-700 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#09e57b' }}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-sm"></div>
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-200/30 dark:bg-green-800/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-emerald-300/30 dark:bg-emerald-700/20 rounded-full blur-3xl -z-10"></div>
      </main>
    </div>
  );
}
