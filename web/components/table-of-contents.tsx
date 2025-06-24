"use client";

import type { ReactNode } from "react";

import { cx } from "@/lib/cx";

interface TocItem {
  depth: number;
  url: string;
  title: ReactNode;
}

interface TableOfContentsProps {
  toc: TocItem[];
  activeId: string;
}

export function TableOfContents({ toc, activeId }: TableOfContentsProps) {
  const handleTocClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    const id = url.replace("#", "");

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120; // Account for top nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "auto",
      });
    }
  };

  if (toc.length === 0) return null;

  return (
    <aside className="sticky top-[73px] hidden h-[calc(100vh-73px)] w-64 overflow-y-auto lg:block">
      <div className="p-6">
        <h2 className="mb-4 font-semibold text-fg-muted text-sm uppercase tracking-wide">
          On This Page
        </h2>

        <nav className="space-y-2">
          {toc.map((item) => {
            const id = item.url.replace("#", "");
            const isActive = activeId === id;
            
            // Calculate indentation based on depth
            // h1=1, h2=2, h3=3, h4=4, etc.
            const getIndentClass = (depth: number) => {
              switch (depth) {
                case 1:
                  return "pl-0"; // No indent for h1
                case 2:
                  return "pl-0"; // No indent for h2
                case 3:
                  return "pl-3"; // Small indent for h3
                case 4:
                  return "pl-6"; // Larger indent for h4 (####)
                case 5:
                  return "pl-9"; // Even larger for h5
                case 6:
                  return "pl-12"; // Largest for h6
                default:
                  return "pl-0";
              }
            };

            return (
              <a
                key={item.url}
                href={item.url}
                onClick={(e) => handleTocClick(item.url, e)}
                className={cx(
                  "block px-3 py-1 text-fg-muted text-sm transition-all duration-200",
                  getIndentClass(item.depth),
                  isActive && "text-fg",
                  !isActive && "text-fg-muted hover:text-fg"
                )}
              >
                {item.title}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
