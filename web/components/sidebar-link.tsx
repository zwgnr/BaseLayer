"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cx } from "@/lib/cx";

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function SidebarLink({ href, children, onClick }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      onClick={() => {
        onClick?.();
      }}
      href={href}
      className={cx(
        "block rounded-lg px-3 py-2 font-semibold text-sm transition-colors hover:bg-secondary",
        isActive && "bg-secondary text-primary hover:bg-secondary"
      )}
    >
      {children}
    </Link>
  );
}
