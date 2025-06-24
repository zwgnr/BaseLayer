import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import { GithubIcon } from "lucide-react";

import { source } from "@/lib/source";

import { MobileNav } from "@/components/mobile-nav";
import { Sidebar } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Extract sidebar data server-side and convert to plain objects
  const pages = source.getPages();
  const introDocs = pages
    .filter((page) => !page.url.startsWith("/docs/components"))
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
      <header className="sticky top-0 z-50 w-full border-border border-b bg-surface">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <Image src="/holo1.png" alt="BaseLayer" width={40} height={40} />

            <MobileNav introDocs={introDocs} componentDocs={componentDocs} />

            {/* Desktop title - hidden on mobile, visible on desktop */}
            <Link
              href="/"
              className="ml-3 hidden font-bold text-xl uppercase tracking-tight md:block"
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
              <GithubIcon className="text-fg-muted transition-colors hover:text-fg" />
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
        <div className="min-w-0 max-w-7xl flex-1">{children}</div>
      </div>
    </div>
  );
}
