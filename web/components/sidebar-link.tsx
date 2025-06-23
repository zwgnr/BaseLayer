"use client";

import { cx } from "@/lib/cx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
}

export function SidebarLink({ href, children }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cx(
        "block px-3 py-2 text-sm transition-colors rounded-lg hover:bg-surface-2 font-semibold",
        isActive && "text-primary bg-surface-2 hover:bg-surface-2"
      )}
    >
      {children}
    </Link>
  );
}
