"use client";

import { type ReactNode } from "react";
import { useActiveHeading } from "../hooks/use-active-heading";
import { TableOfContents } from "./table-of-contents";

interface TocItem {
  depth: number;
  url: string;
  title: ReactNode;
}

interface DocsPageProps {
  toc: TocItem[];
  children: ReactNode;
}

export function DocsPage({ toc, children }: DocsPageProps) {
  const { containerRef, activeId } = useActiveHeading(children);

  return (
    <div className="flex flex-1">
      {/* Main Content */}
      <main className="flex-1 min-w-0" ref={containerRef}>
        <div className="max-w-4xl mx-auto px-8 py-12">
          {children}
          {/* Page Navigation */}
          <div className="mt-16 pt-8 border-gray-800 pb-12">
            <div className="flex justify-between items-center">
              <span>Previous</span>

              <span>Next</span>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar - Table of Contents */}
      <TableOfContents toc={toc} activeId={activeId} />
    </div>
  );
}
