import {
  Column as AriaColumn,
  GridList as AriaGridList,
  TableBody as AriaTableBody,
  TableHeader as AriaTableheader,
  Cell,
  CellProps,
  Collection,
  ColumnProps,
  Row,
  RowProps,
  TableHeaderProps,
  GridListProps,
  useTableOptions,
} from "react-aria-components";

import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { tv } from "tailwind-variants";
import { Button } from "./button";
import { Checkbox } from "./checkbox";

const gridList = tv({
  slots: {
    root: "table min-h-[100px] w-full border-separate border-spacing-0 self-start rounded-xl border p-4 outline-none",
    column: "border-b-2 px-4 py-1 text-left outline-none",
    header: " after:table-row after:h-[2px] last:border-b-2",
    label: "text-fg-3",
  },
});

const { root, header, column } = gridList();

const TableBody = AriaTableBody;

const GridList = <T extends Object>({
  children,
  className,
  ...props
}: GridListProps<T> & { className?: string }) => (
  <AriaGridList {...props} className={root({ className })}>
    {children}
  </AriaGridList>
);

const TableCell = ({
  children,
  className,
  ...props
}: CellProps & { className?: string }) => (
  <Cell {...props} className="px-4 py-2">
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
    <Row
      id={id}
      {...props}
      className="relative cursor-default rounded-xl outline-none"
    >
      {allowsDragging && (
        <Cell>
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

export { Column, GridList, TableBody, TableCell, TableHeader, TableRow };
