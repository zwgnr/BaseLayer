"use client";

import type { ReactNode } from "react";

import Link from "next/link";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { useActiveHeading } from "../hooks/use-active-heading";
import type { PageNavigation } from "../lib/navigation";
import { TableOfContents } from "./table-of-contents";

interface TocItem {
  depth: number;
  url: string;
  title: ReactNode;
}

interface DocsPageProps {
  toc: TocItem[];
  children: ReactNode;
  navigation?: PageNavigation;
}

export function DocsPage({ toc, children, navigation }: DocsPageProps) {
  const { containerRef, activeId } = useActiveHeading(children);

  return (
    <div className="flex flex-1">
      {/* Main Content */}
      <main className="min-w-0 flex-1" ref={containerRef}>
        <div className="mx-auto max-w-4xl px-0 py-8 md:px-8 md:py-12">
          {children}
          {/* Page Navigation */}
          {(navigation?.previous || navigation?.next) && (
            <div className="mt-16 border-gray-800 px-8 pt-8 pb-12">
              <div className="flex items-center justify-between">
                {navigation.previous ? (
                  <Link
                    href={navigation.previous.url}
                    className="flex items-center gap-2 rounded-lg bg-surface p-3 text-fg-muted transition-colors hover:bg-surface-hover hover:text-fg"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                    <div className="text-right">
                      <div className="text-xs">Previous</div>
                      <div className="font-medium">{navigation.previous.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {navigation.next ? (
                  <Link
                    href={navigation.next.url}
                    className="flex items-center gap-2 rounded-lg bg-surface p-3 text-fg-muted transition-colors hover:bg-surface-hover hover:text-fg"
                  >
                    <div className="text-left">
                      <div className="text-xs">Next</div>
                      <div className="font-medium">{navigation.next.title}</div>
                    </div>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Right Sidebar - Table of Contents */}
      <TableOfContents toc={toc} activeId={activeId} />
    </div>
  );
}
