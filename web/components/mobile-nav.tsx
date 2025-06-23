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
        className="md:hidden ml-3 p-1 rounded-md hover:bg-surface-variant transition-colors"
        aria-label="Toggle mobile menu"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile menu sidebar */}
      <div
        className={`md:hidden fixed left-0 top-0 z-50 h-full w-80 bg-surface border-r border-border transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center">
            <Image src="/holo1.png" alt="BaseLayer" width={32} height={32} />
            <span className="ml-2 text-lg font-bold uppercase tracking-tight">
              BaseLayer
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="p-1 rounded-md hover:bg-surface-variant transition-colors"
            aria-label="Close mobile menu"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu content */}
        <div
          className="overflow-y-auto h-[calc(100vh-73px)]"
          onClick={closeMobileMenu}
        >
          <div className="p-6 space-y-6">
            {/* Announcement */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-3">
              <p className="text-sm ">🎉 BaseLayer v2 is here!</p>
            </div>

            {/* Getting Started */}
            <nav className="space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-fg-muted uppercase tracking-wide mb-3">
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
                  <h3 className="text-xs font-semibold text-fg-muted uppercase tracking-wide mb-3">
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
