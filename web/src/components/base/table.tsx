import {
  Column as AriaColumn,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableheader,
  Cell,
  Collection,
  Row,
  useTableOptions,
  type CellProps,
  type ColumnProps,
  type RowProps,
  type TableHeaderProps,
  type TableProps,
} from "react-aria-components";

import { Button } from "@/components/base/button";
import { Checkbox } from "@/components/base/checkbox";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { tv } from "tailwind-variants";

const table = tv({
  slots: {
    root: "table min-h-[100px] border-separate border-spacing-0 self-start rounded-xl border border-border p-4 outline-none",
    column: "border-b-2 border-border px-4 py-1 text-left outline-none",
    header: "text-fg after:table-row after:h-[2px]",
    label: "text-fg-3",
    row: "relative cursor-default rounded-xl text-fg outline-none ring-focus data-[focus-visible]:ring-2",
    cell: "px-4 py-2 outline-none ring-focus data-[focus-visible]:ring-2",
  },
});

const { root, header, column, row, cell } = table();

const TableBody = AriaTableBody;

const Table = ({
  children,
  className,
  ...props
}: TableProps & { className?: string }) => (
  <AriaTable {...props} className={root({ className })}>
    {children}
  </AriaTable>
);

const TableCell = ({
  children,
  className,
  ...props
}: CellProps & { className?: string }) => (
  <Cell {...props} className={cell({ className })}>
    {children}
  </Cell>
);

const Column = ({
  children,
  className,
  ...props
}: ColumnProps & { className?: string }) => (
  <AriaColumn {...props} className={column({ className })}>
    {({ allowsSorting, sortDirection }) => (
      <div className="flex items-center gap-2">
        <>
          {children}
          {allowsSorting &&
            (sortDirection === undefined ? (
              <div className="w-6"></div>
            ) : sortDirection === "ascending" ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            ))}
        </>
      </div>
    )}
  </AriaColumn>
);

const TableHeader = <T extends object>({
  children,
  className,
  columns,
  ...props
}: TableHeaderProps<T> & { className?: string }) => {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();
  return (
    <AriaTableheader {...props} className={header()}>
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
};

const TableRow = <T extends object>({
  children,
  className,
  columns,
  id,
  ...props
}: RowProps<T> & { className?: string }) => {
  let { selectionBehavior, allowsDragging } = useTableOptions();
  return (
    <Row id={id} {...props} className={row()}>
      {allowsDragging && (
        <Cell className="ring-focus data-[focus-visible]:ring-2">
          <Button className="bg-transparent" slot="drag">
            <Menu className="h-4 w-4 text-fg" />
          </Button>
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
};

export { Column, Table, TableBody, TableCell, TableHeader, TableRow };
