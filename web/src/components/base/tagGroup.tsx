import { Button } from "@/components/base/button";
import {
  Label as AriaLabel,
  Tag as AriaTag,
  TagGroup,
  TagList,
  Text,
  type TagGroupProps as AriaTagGroupProps,
  type TagProps as AriaTagProps,
  type TagListProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const tagGroup = tv({
  slots: {
    root: "flex flex-col gap-2 text-sm",
    list: "flex flex-wrap gap-2",
    tag: "flex cursor-default items-center rounded-md border p-2 outline-none ring-focus ring-offset-2 ring-offset-surface aria-selected:bg-secondary aria-selected:text-secondary-fg data-[focus-visible]:ring-2",
  },
});

const { root, list, tag } = tagGroup();

const Label = AriaLabel;

interface TagGroupProps<T>
  extends Omit<AriaTagGroupProps, "children">,
    Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

const TagGroupRoot = <T extends object>({
  label,
  className,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) => (
  <TagGroup className={root({ className })} {...props}>
    <AriaLabel>{label}</AriaLabel>
    <TagList
      className={list()}
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
      <Text className="text-sm text-critical" slot="errorMessage">
        {errorMessage}
      </Text>
    )}
  </TagGroup>
);

const Tag = ({
  children,
  className,
  ...props
}: AriaTagProps & { className?: string }) => {
  const textValue = typeof children === "string" ? children : undefined;
  return (
    <AriaTag className={tag({ className })} textValue={textValue} {...props}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && <Button slot="remove">ⓧ</Button>}
        </>
      )}
    </AriaTag>
  );
};

export { Label, Tag, TagGroupRoot };
