import { source } from "@/lib/source";

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
        {/* Announcement */}
        <div className="rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-3">
          <p className="text-sm ">🎉 BaseLayer v2 is here!</p>
        </div>

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
