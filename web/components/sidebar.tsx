import { source } from "@/lib/source";
import { SidebarLink } from "./sidebar-link";

export function Sidebar() {
  const pages = source.getPages();

  // Separate docs into categories
  const introDocs = pages.filter((page) => page.url === "/docs/intro");
  const componentDocs = pages.filter((page) =>
    page.url.startsWith("/docs/components")
  );

  return (
    <div className="w-64 h-[calc(100vh-73px)] sticky top-[73px] overflow-y-auto border-r border-border">
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
  );
}
