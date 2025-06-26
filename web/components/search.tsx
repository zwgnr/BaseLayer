"use client";

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { Button, Dialog, Input, Modal } from '@baselayer/components';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { FileTextIcon, SearchIcon } from 'lucide-react';

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const { setSearch: setSearchQuery, query } = useDocsSearch({
    type: 'fetch',
  });

  // Update search when input changes
  useEffect(() => {
    setSearchQuery(search);
  }, [search, setSearchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const results = Array.isArray(query.data) ? query.data : [];

  return (
    < >
      <Button
        onPress={() => setIsOpen(true)}
        variant="secondary"
        className="flex w-full gap-4"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="text-sm">Search</span>
        <kbd className="ml-auto hidden rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-xs md:inline-block">
          ⌘K
        </kbd>
      </Button>

      <Modal isDismissable isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dialog aria-label="Search documentation">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <SearchIcon className="h-4 w-4 text-fg-muted" />
              <div className="flex-1">
                <Input
                  aria-label="Search documentation"
                  placeholder="Search documentation..."
                  value={search}
                  onChange={setSearch}
                />
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-[300px] overflow-y-auto">
              {search.length === 0 ? (
                <div className="py-6 text-center text-fg-muted text-sm">
                  Start typing to search documentation...
                </div>
              ) : results.length === 0 ? (
                <div className="py-6 text-center text-fg-muted text-sm">
                  No results found for "{search}"
                </div>
              ) : (
                <div className="grid gap-2">
                  {results.slice(0, 10).map((result, index) => (
                    <Link
                      key={result.id || index}
                      href={result.url}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-surface-2"
                    >
                      <FileTextIcon className="h-4 w-4 text-fg-muted" />
                      <div className="flex-1">
                        <div className="font-medium">{result.content}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-border border-t pt-3 text-fg-muted text-xs">
              <span>Press ESC to close</span>
              <span>⌘K to search</span>
            </div>
          </div>
        </Dialog>
      </Modal>
    </>
  );
} 