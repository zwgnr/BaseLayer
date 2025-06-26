"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cx } from "@/lib/cx";

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
        "block rounded-lg px-3 py-2 font-semibold text-sm transition-colors hover:bg-surface-2",
        isActive && "bg-surface-2 text-primary hover:bg-surface-2"
      )}
    >
      {children}
    </Link>
  );
}
