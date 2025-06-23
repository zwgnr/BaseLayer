import type { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { source } from "@/lib/source";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Extract sidebar data server-side and convert to plain objects
  const pages = source.getPages();
  const introDocs = pages
    .filter((page) => page.url === "/docs/intro")
    .map((page) => ({
      url: page.url,
      data: {
        title: page.data.title,
      },
    }));
  const componentDocs = pages
    .filter((page) => page.url.startsWith("/docs/components"))
    .map((page) => ({
      url: page.url,
      data: {
        title: page.data.title,
      },
    }));

  return (
    <div className="min-h-screen bg-surface">
      {/* Top Navigation Bar - Full Width */}
      <header className="w-full bg-surface sticky top-0 z-50 border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <Image src="/holo1.png" alt="BaseLayer" width={40} height={40} />

            <MobileNav introDocs={introDocs} componentDocs={componentDocs} />

            {/* Desktop title - hidden on mobile, visible on desktop */}
            <Link
              href="/"
              className="hidden md:block text-xl font-bold uppercase tracking-tight ml-3"
            >
              BaseLayer
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/zwgnr/BaseLayer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="text-fg-muted hover:text-fg transition-colors" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* below the top nav */}
      <div className="flex">
        {/* Left Sidebar - hidden on mobile, visible on desktop */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main content area - center content + right TOC */}
        <div className="flex-1 min-w-0 max-w-7xl">{children}</div>
      </div>
    </div>
  );
}
