"use client";

import type { HTMLAttributes } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const card = tv({
	slots: {
		root: "rounded-2xl border-2 bg-surface text-fg",
		header: "flex flex-col space-y-1.5 p-6",
		title: "font-semibold text-2xl leading-none tracking-tight",
		description: "text-fg-muted text-sm",
		content: "p-6 pt-0",
		footer: "flex items-center p-6 pt-0",
	},
	variants: {
		variant: {
			outlined: {
				root: "border border-border/50",
			},
			filled: {
				root: "border-surface-2 bg-surface-2",
			},
		},
	},
	defaultVariants: {
		variant: "outlined",
	},
});

const styles = card();

type CardVariantProps = VariantProps<typeof card>;

interface CardProps extends HTMLAttributes<HTMLDivElement>, CardVariantProps {
	className?: string;
	title?: string;
	description?: string;
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

const Card = ({
	className,
	variant,
	title,
	description,
	children,
	...props
}: CardProps) => (
	<div className={styles.root({ variant, className })} {...props}>
		{(title || description) && (
			<div className={styles.header()}>
				{title && <h3 className={styles.title()}>{title}</h3>}
				{description && <p className={styles.description()}>{description}</p>}
			</div>
		)}
		{children}
	</div>
);

const CardHeader = ({ className, ...props }: CardHeaderProps) => (
	<div className={styles.header({ className })} {...props} />
);

const CardContent = ({ className, ...props }: CardContentProps) => (
	<div className={styles.content({ className })} {...props} />
);

const CardFooter = ({ className, ...props }: CardFooterProps) => (
	<div className={styles.footer({ className })} {...props} />
);

export { Card, CardHeader, CardContent, CardFooter };
export type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps };
