import {
  Tag as AriaTag,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Label as AriaLabel,
  TagGroup,
  TagList,
  TagListProps,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Button } from "./button";

export const tagGroup = tv({
  slots: {
    root: "flex flex-col gap-1 text-sm",
    list: "flex flex-wrap gap-2",
    tag: "flex cursor-default items-center rounded-xl border p-2 outline-none aria-selected:bg-secondary aria-selected:text-secondary-fg",
  },
});

const { root, list, tag } = tagGroup();

export const Label = AriaLabel

interface TagGroupProps<T>
  extends Omit<AriaTagGroupProps, "children">,
    Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export const TagGroupRoot = <T extends object>({
  label,
  className,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) => {
  return (
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
};

interface TagProps extends AriaTagProps {
  className?: string | undefined;
}

export const Tag = ({ children, className, ...props }: TagProps) => {
  let textValue = typeof children === "string" ? children : undefined;
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
