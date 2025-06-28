"use client";

import {
	Tag as AriaTag,
	TagGroup as AriaTagGroup,
	type TagGroupProps as AriaTagGroupProps,
	type TagProps as AriaTagProps,
	Label,
	TagList,
	type TagListProps,
	Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const tagGroup = tv({
	slots: {
		root: "flex flex-col gap-2 text-sm",
		list: "flex flex-wrap gap-2",
		tag: "flex cursor-default items-center rounded-full border px-2 py-1 outline-none ring-focus ring-offset-2 ring-offset-surface aria-selected:bg-primary aria-selected:text-primary-fg data-[focus-visible]:ring-2",
	},
});

const styles = tagGroup();

interface TagGroupProps<T>
	extends Omit<AriaTagGroupProps, "children">,
		Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {
	label?: string;
	description?: string;
	errorMessage?: string;
}

const TagGroup = <T extends object>({
	label,
	className,
	description,
	errorMessage,
	items,
	children,
	renderEmptyState,
	...props
}: TagGroupProps<T>) => (
	<AriaTagGroup className={styles.root({ className })} {...props}>
		{label && <Label className="text-primary text-sm">{label}</Label>}
		<TagList
			className={styles.list()}
			items={items}
			renderEmptyState={renderEmptyState}
		>
			{children}
		</TagList>
		{description && (
			<Text className="text-sm" slot="description">
				{description}
			</Text>
		)}
		{errorMessage && (
			<Text className="text-danger text-sm" slot="errorMessage">
				{errorMessage}
			</Text>
		)}
	</AriaTagGroup>
);

const Tag = ({
	children,
	className,
	...props
}: AriaTagProps & { className?: string }) => {
	const textValue = typeof children === "string" ? children : undefined;
	return (
		<AriaTag
			className={styles.tag({ className })}
			textValue={textValue}
			{...props}
		>
			{children}
		</AriaTag>
	);
};

export { Tag, TagGroup };
