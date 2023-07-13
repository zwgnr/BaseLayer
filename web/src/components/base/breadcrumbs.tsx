import {
  Breadcrumbs as AriaBreadcrumbs,
  Item,
  ItemProps,
  Link,
  LinkProps,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const breadcrumbs = tv({
  slots: {
    root: "[&>ol]:font-md [&>ol]:m-0 [&>ol]:flex [&>ol]:list-none [&>ol]:items-center  [&>ol]:gap-2 [&>ol]:p-0",
    link: "relative cursor-pointer text-fg-5 outline-none hover:underline [&[aria-current]]:font-extrabold [&[aria-current]]:text-fg",
    item: "flex items-center gap-2",
  },
});

interface BreadcrumbsProps<T> extends AriaBreadcrumbsProps<T> {
  className?: string | undefined;
}

const { root, link, item } = breadcrumbs();

export const Breadcrumbs = <T extends object>({
  children,
  className,
  ...props
}: BreadcrumbsProps<T>) => {
  return (
    <AriaBreadcrumbs className={root({ className })} {...props}>
      {children}
    </AriaBreadcrumbs>
  );
};

export const BreadCrumbsLink = ({
  children,
  className,
  ...props
}: LinkProps & { className?: string }) => {
  return (
    <Link className={link({ className })} {...props}>
      {children}
    </Link>
  );
};

export const BreadCrumbsItem = ({
  children,
  className,
  ...props
}: ItemProps & { className?: string }) => {
  return (
    <Item className={item({ className })} {...props}>
      {children}
    </Item>
  );
};
