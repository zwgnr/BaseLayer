import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import {
  Column as AriaColumn,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableheader,
  Cell,
  Collection,
  Row,
  useTableOptions,
} from "react-aria-components";

import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { tv } from "tailwind-variants";
import { Button } from "./button";
import { Checkbox } from "./checkbox";

export const table = tv({
  slots: {
    root: "table min-h-[100px] w-full border-separate border-spacing-0 self-start rounded-2xl border-2 p-4 outline-none",
    column: "border-b-2 px-4 py-1 text-left outline-none",
    header: " after:table-row after:h-[2px] last:border-b-2",
    label: "text-fg-3",
  },
});

const { root, header, column } = table();

export const TableBody = AriaTableBody;

export const Table = forwardRef<
  ElementRef<typeof AriaTable>,
  Omit<ComponentPropsWithoutRef<typeof AriaTable>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AriaTable ref={ref} {...props} className={root()}>
    {children}
  </AriaTable>
));

export const TableCell = forwardRef<
  ElementRef<typeof Cell>,
  Omit<ComponentPropsWithoutRef<typeof Cell>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <Cell ref={ref} {...props} className="px-4 py-2">
    {children}
  </Cell>
));

export const Column = forwardRef<
  ElementRef<typeof AriaColumn>,
  Omit<ComponentPropsWithoutRef<typeof AriaColumn>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AriaColumn ref={ref} {...props} className={column({ className })}>
    {({ allowsSorting, sortDirection }) => (
      <div className="flex items-center gap-2">
        <>
          {children}
          {allowsSorting &&
            (sortDirection === undefined ? <div className="w-6"></div> : sortDirection ===
              "ascending" ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            ))}
        </>
      </div>
    )}
  </AriaColumn>
));

export const TableHeader = forwardRef<
  ElementRef<typeof AriaTableheader>,
  Omit<ComponentPropsWithoutRef<typeof AriaTableheader>, "className"> & {
    className?: string;
  }
>(({ className, children, columns, ...props }, ref) => {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

  return (
    <AriaTableheader ref={ref} {...props} className={header()}>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === "toggle" && (
        <Column>
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaTableheader>
  );
});

export const TableRow = forwardRef<
  ElementRef<typeof Row>,
  Omit<ComponentPropsWithoutRef<typeof Row>, "className"> & {
    className?: string;
  }
>(({ className, children, columns, id, ...props }, ref) => {
  let { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <Row
      id={id}
      {...props}
      ref={ref}
      className="relative cursor-default rounded-xl outline-none"
    >
      {allowsDragging && (
        <Cell>
          <Button className="bg-transparent" slot="drag"><Menu className="h-4 w-4 text-fg"/></Button>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell className="">
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </Row>
  );
});
