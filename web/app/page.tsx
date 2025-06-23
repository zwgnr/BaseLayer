import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <Image src="/holo1.png" alt="BaseLayer" width={40} height={40} />
          <span className="text-xl font-extrabold uppercase">BaseLayer</span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/docs/intro"
            className="text-fg-muted hover:text-fg transition-colors font-medium"
          >
            Docs
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-20 md:py-28 lg:py-36 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-fg mb-6 leading-tight">
            A component system for the{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
              AI era
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-fg-muted mb-12 leading-relaxed max-w-3xl mx-auto">
            Beautiful, accessible primitives powered by react-aria-components
            and tailwind css.
          </p>

          <Link
            href="/docs/intro"
            className="rounded-4xl bg-primary text-primary-fg px-6 py-3 text-base font-semibold"
          >
            Get Started
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/30 rounded-full blur-3xl -z-10"></div>
      </main>
    </div>
  );
}
