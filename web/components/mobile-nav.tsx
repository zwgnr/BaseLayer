"use client";

import { useState } from "react";

import Image from "next/image";

import { MenuIcon, XIcon } from "lucide-react";

import { SidebarLink } from "./sidebar-link";

interface Page {
  url: string;
  data: {
    title: string;
  };
}

interface MobileNavProps {
  introDocs: Page[];
  componentDocs: Page[];
}

export function MobileNav({ introDocs, componentDocs }: MobileNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button - visible on mobile, hidden on desktop */}
      <button
        onClick={toggleMobileMenu}
        className="ml-3 rounded-md p-1 transition-colors hover:bg-surface-variant md:hidden"
        aria-label="Toggle mobile menu"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile menu sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 transform border-border border-r bg-surface transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between border-border border-b p-4">
          <div className="flex items-center">
            <Image src="/bl.svg" alt="BaseLayer" width={32} height={32} className="dark:invert" />
            <span className="ml-2 font-bold text-lg uppercase tracking-tight">
              BaseLayer
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="rounded-md p-1 transition-colors hover:bg-surface-variant"
            aria-label="Close mobile menu"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu content */}
        <div
          className="h-[calc(100vh-73px)] overflow-y-auto"
          onClick={closeMobileMenu}
        >
          <div className="space-y-6 p-6">
            {/* Getting Started */}
            <nav className="space-y-4">
              <div>
                <h3 className="mb-3 font-semibold text-fg-muted text-xs uppercase tracking-wide">
                  Getting Started
                </h3>
                <div className="space-y-1">
                  {introDocs.map((page) => (
                    <SidebarLink key={page.url} href={page.url}>
                      {page.data.title}
                    </SidebarLink>
                  ))}
                </div>
              </div>

              {/* Components */}
              {componentDocs.length > 0 && (
                <div>
                  <h3 className="mb-3 font-semibold text-fg-muted text-xs uppercase tracking-wide">
                    Components
                  </h3>
                  <div className="space-y-1">
                    {componentDocs.map((page) => (
                      <SidebarLink key={page.url} href={page.url}>
                        {page.data.title}
                      </SidebarLink>
                    ))}
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
