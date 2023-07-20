import {
  Breadcrumbs as AriaBreadcrumbs,
  Item,
  ItemProps,
  Link,
  LinkProps,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const breadcrumbs = tv({
  slots: {
    root: "[&>ol]:font-md [&>ol]:m-0 [&>ol]:flex [&>ol]:list-none [&>ol]:items-center [&>ol]:gap-2 [&>ol]:p-0",
    link: "relative cursor-pointer text-fg-5 outline-none data-[hovered]:underline [&[aria-current]]:font-extrabold [&[aria-current]]:text-fg",
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
}: ItemProps & { className?: string }) => (
  <Item className={item({ className })} {...props}>
    {children}
  </Item>
);

BreadCrumbsItem.displayName = "BreadCrumbsItem";

export { BreadCrumbsItem, BreadCrumbsLink, Breadcrumbs };
