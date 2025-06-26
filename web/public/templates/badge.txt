import type { HTMLAttributes } from "react";

import { tv, type VariantProps } from "tailwind-variants";

export const badge = tv({
	base: "flex items-center justify-center rounded-4xl px-3 py-2 font-semibold text-xs",
	variants: {
		variant: {
			attention: "bg-gradient-to-r from-pink-500 to-purple-500 text-white",
			neutral: "bg-secondary text-secondary-fg",
			danger: "bg-danger text-danger-fg",
		},
	},
	defaultVariants: {
		variant: "attention",
	},
});

type BadgeProps = VariantProps<typeof badge> & HTMLAttributes<HTMLSpanElement>;

const Badge = ({ className, variant, ...props }: BadgeProps) => (
	<span className={badge({ variant, className })} {...props} />
);

export { Badge };
export type { BadgeProps };
