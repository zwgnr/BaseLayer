"use client";

import {
	Breadcrumbs as AriaBreadcrumbs,
	type BreadcrumbsProps as AriaBreadcrumbsProps,
	Breadcrumb,
	type BreadcrumbProps,
	Link,
	type LinkProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const breadcrumbs = tv({
	slots: {
		root: "m-0 flex list-none items-center gap-2 p-0 font-md",
		link: "relative cursor-pointer rounded-md text-fg outline-none ring-focus data-[hovered]:underline data-[focus-visible]:ring-2 [&[aria-current]]:font-extrabold [&[aria-current]]:text-fg",
		item: "flex items-center gap-2",
	},
});

const styles = breadcrumbs();

const Breadcrumbs = <T extends object>({
	children,
	className,
	...props
}: AriaBreadcrumbsProps<T> & { className?: string }) => (
	<AriaBreadcrumbs className={styles.root({ className })} {...props}>
		{children}
	</AriaBreadcrumbs>
);

const BreadcrumbsLink = ({
	children,
	className,
	...props
}: LinkProps & { className?: string }) => (
	<Link className={styles.link({ className })} {...props}>
		{children}
	</Link>
);

const BreadcrumbsItem = ({
	children,
	className,
	...props
}: BreadcrumbProps & { className?: string }) => (
	<Breadcrumb className={styles.item({ className })} {...props}>
		{children}
	</Breadcrumb>
);

export { BreadcrumbsItem, BreadcrumbsLink, Breadcrumbs };