import { Button } from "@/components/base/button";
import { Checkbox } from "@/components/base/checkbox";
import { Menu } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { ListBox as AriaListBox, Item } from "react-aria-components";
import { tv } from "tailwind-variants";

export const listBox = tv({
  slots: {
    root: "flex w-72 flex-col overflow-auto rounded-xl border-2 border-surface-2 p-2 outline-none ",
    item: "relative my-1 flex cursor-default flex-row items-center rounded-xl p-4  outline-none  aria-selected:bg-primary aria-selected:text-primary-fg [&[data-dragging]]:opacity-50",
  },
});

const { root, item } = listBox();

export const ListBox = forwardRef<
  ElementRef<typeof AriaListBox>,
  Omit<ComponentPropsWithoutRef<typeof AriaListBox>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AriaListBox ref={ref} {...props} className={root({ className })}>
    {children}
  </AriaListBox>
));

export const ListBoxItem = forwardRef<
  ElementRef<typeof Item>,
  Omit<ComponentPropsWithoutRef<typeof Item>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => {
  let textValue = typeof children === "string" ? children : undefined;

  return (
    <Item
      textValue={textValue}
      {...props}
      className={item({ className })}
      ref={ref}
    >
      {({ selectionMode, selectionBehavior, allowsDragging, isSelected }) => (
        <div className="flex items-center gap-2">
          <>
            {/* Add elements for drag and drop and selection. */}
            {allowsDragging && (
         
                <Menu
                  className={`h-4 w-4 mr-4 text-fg ${
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
});
