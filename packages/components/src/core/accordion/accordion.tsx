"use client";

import type { ReactNode } from "react";

import {
	Button,
	Disclosure,
	DisclosureGroup,
	type DisclosureGroupProps ,
	DisclosurePanel,
	type DisclosureProps,
	Heading,
	Text,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

import { ChevronRight } from "lucide-react";

const accordion = tv({
	slots: {
		root: "border-border border-b last:border-b-0",
		group: "divide-y divide-border rounded-lg border border-border px-2",
		button:
			"flex w-full items-center justify-between gap-2 border-none bg-transparent p-3 text-left font-bold text-base shadow-none last:pb-0 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-focus data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-surface",
		icon: "size-4 shrink-0 rotate-0 fill-none transition-transform duration-200 data-[expanded]:rotate-90",
		panel: "px-3 pt-1 pb-2 text-muted-foreground text-sm",
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
            <span>{title}</span>
							<ChevronRight
								className={styles.icon()}
								data-expanded={isExpanded ? "" : undefined}
							/>

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
	label?: string;
	children: ReactNode;
}

const AccordionGroup = ({
	className,
	label,
	children,
	...props
}: AccordionGroupProps) => (
	<DisclosureGroup {...props} className={styles.group({ className })}>
		{label && (
			<Text className="mb-2 font-medium text-md" slot="label">
				{label}
			</Text>
		)}
		{children}
	</DisclosureGroup>
);

export { Accordion, AccordionGroup };
export type { AccordionProps, AccordionGroupProps };
