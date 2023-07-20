import { Menu } from "lucide-react";

import {
  ListBox as AriaListBox,
  Item,
  ItemProps,
  ListBoxProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

export const listBox = tv({
  slots: {
    root: "flex w-72 flex-col overflow-auto rounded-xl border border-surface-2 p-2 shadow-xl outline-none",
    item: "relative my-1 flex cursor-default flex-row items-center rounded-md p-2 outline-none ring-focus ring-offset-surface aria-selected:bg-primary aria-selected:text-primary-fg data-[focus-visible]:ring-2 data-[focus-visible]:aria-selected:ring-offset-2 [&[data-dragging]]:opacity-50",
  },
});

const { root, item } = listBox();

const ListBox = <T extends object>({
  children,
  className,
  ...props
}: ListBoxProps<T> & { className?: string }) => (
  <AriaListBox {...props} className={root({ className })}>
    {children}
  </AriaListBox>
);

const ListBoxItem = <T extends object>({
  children,
  className,
  ...props
}: ItemProps<T> & { className?: string }) => {
  let textValue = typeof children === "string" ? children : undefined;

  return (
    <Item textValue={textValue} {...props} className={item({ className })}>
      {({ allowsDragging, isSelected }) => (
        <div className="flex items-center gap-2">
          <>
            {/* Add elements for drag and drop and selection. */}
            {allowsDragging && (
              <Menu
                className={`mr-4 h-4 w-4 text-fg ${
                  isSelected ? "text-primary-fg" : ""
                }`}
              />
            )}
            {}
            {children}
          </>
        </div>
      )}
    </Item>
  );
};

export { ListBox, ListBoxItem };
