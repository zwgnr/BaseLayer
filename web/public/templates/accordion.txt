"use client";

import type { ReactNode } from "react";

import {
	Button,
	Disclosure,
	DisclosureGroup,
	type DisclosureGroupProps,
	DisclosurePanel,
	type DisclosureProps,
	Heading,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

import { Minus, Plus } from "lucide-react";

const accordion = tv({
	slots: {
		root: "group w-full",
		group: "flex flex-col gap-3",
		button:
			"flex w-full items-center justify-between gap-6 rounded-2xl border border-border bg-surface-2 p-4 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-focus data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-surface group-data-[expanded]:rounded-b-none group-data-[expanded]:border-b-0",
		icon: "size-4 shrink-0 fill-none transition-transform duration-200",
		panel:
			"rounded-b-2xl border-border bg-surface-2 px-4 text-muted-foreground text-sm group-data-[expanded]:border-x group-data-[expanded]:border-b group-data-[expanded]:pb-4",
	},
});

const styles = accordion();

type AccordionVariantProps = VariantProps<typeof accordion>;

interface AccordionProps
	extends AccordionVariantProps,
		Omit<DisclosureProps, "children"> {
	className?: string;
	title?: string;
	children?: ReactNode;
}

const Accordion = ({
	className,
	title,
	children,
	...props
}: AccordionProps) => {
	return (
		<Disclosure className={styles.root({ className })} {...props}>
			{({ isExpanded }) => (
				<>
					<Heading>
						<Button slot="trigger" className={styles.button()}>
							<span className="font-bold">{title}</span>
							{isExpanded ? (
								<Minus className={styles.icon()} />
							) : (
								<Plus className={styles.icon()} />
							)}
						</Button>
					</Heading>
					<DisclosurePanel className={styles.panel()}>
						{children}
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
};

interface AccordionGroupProps extends DisclosureGroupProps {
	className?: string;
	children: ReactNode;
}

const AccordionGroup = ({
	className,
	children,
	...props
}: AccordionGroupProps) => (
	<DisclosureGroup {...props} className={styles.group({ className })}>
		{children}
	</DisclosureGroup>
);

export { Accordion, AccordionGroup };
export type { AccordionProps, AccordionGroupProps };
