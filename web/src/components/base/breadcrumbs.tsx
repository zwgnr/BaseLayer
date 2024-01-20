import {
  Breadcrumbs as AriaBreadcrumbs,
  Breadcrumb,
  Link,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
  type BreadcrumbProps,
  type LinkProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const breadcrumbs = tv({
  slots: {
    root: "font-md m-0 flex list-none items-center gap-2 p-0",
    link: "relative cursor-pointer rounded-md text-fg-5 outline-none ring-focus data-[hovered]:underline data-[focus-visible]:ring-2 [&[aria-current]]:font-extrabold [&[aria-current]]:text-fg",
    item: "flex items-center gap-2",
  },
});

const { root, link, item } = breadcrumbs();

const Breadcrumbs = <T extends object>({
  children,
  className,
  ...props
}: AriaBreadcrumbsProps<T> & { className?: string }) => (
  <AriaBreadcrumbs className={root({ className })} {...props}>
    {children}
  </AriaBreadcrumbs>
);

Breadcrumbs.displayName = "Breadcrumbs";

const BreadCrumbsLink = ({
  children,
  className,
  ...props
}: LinkProps & { className?: string }) => (
  <Link className={link({ className })} {...props}>
    {children}
  </Link>
);

BreadCrumbsLink.displayName = "BreadCrumbsLink";

const BreadCrumbsItem = ({
  children,
  className,
  ...props
}: BreadcrumbProps & { className?: string }) => (
  <Breadcrumb className={item({ className })} {...props}>
    {children}
  </Breadcrumb>
);

BreadCrumbsItem.displayName = "BreadCrumbsItem";

export { BreadCrumbsItem, BreadCrumbsLink, Breadcrumbs };
