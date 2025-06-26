import { source } from "@/lib/source";

import { SearchDialog } from "./search";
import { SidebarLink } from "./sidebar-link";

export function Sidebar() {
  const pages = source.getPages();

  // Separate docs into categories
  const introDocs = pages.filter((page) => !page.url.startsWith("/docs/components"));
  const componentDocs = pages.filter((page) =>
    page.url.startsWith("/docs/components")
  );

  return (
    <div className="sticky top-[73px] h-[calc(100vh-73px)] w-64 overflow-y-auto border-border border-r">
      <div className="space-y-6 p-6">
        {/* Search */}
        <SearchDialog />
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
  );
}
