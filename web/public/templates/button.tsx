"use client";

import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
	base: "inline-flex appearance-none items-center justify-center rounded-full font-semibold outline-none ring-focus ring-offset-3 ring-offset-surface transition-transform duration-100 disabled:pointer-events-none disabled:opacity-50 data-[focus-visible]:ring-2",
	variants: {
		variant: {
			primary:
				"bg-primary text-primary-fg data-[hovered]:bg-primary/80",
			secondary:
				"text-fg shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] shadow-border data-[hovered]:border-secondary data-[hovered]:bg-secondary",
			ghost:
				"bg-transparent text-fg data-[hovered]:bg-secondary data-[hovered]:text-secondary-fg",
			danger:
				"border border-transparent bg-danger text-danger-fg data-[hovered]:bg-danger/80",
		},
		size: {
			sm: "px-2 py-1 text-sm has-[>svg]:px-3",
			md: "px-4 py-2 text-base has-[>svg]:px-6",
			lg: "px-6 py-3 font-bold text-lg has-[>svg]:px-8",
			icon: "size-9",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

type ButtonVariantProps = VariantProps<typeof button>;

interface ButtonProps
	extends Omit<AriaButtonProps, "className">,
		ButtonVariantProps {
	className?: string;
}

const Button = ({
	className,
	size,
	variant,
	children,
	...props
}: ButtonProps) => (
	<AriaButton className={button({ className, size, variant })} {...props}>
		{children}
	</AriaButton>
);

export { Button };
export type { ButtonProps };
