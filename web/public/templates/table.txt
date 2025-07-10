"use client";

import {
	Column as AriaColumn,
	Table as AriaTable,
	TableBody as AriaTableBody,
	TableHeader as AriaTableheader,
	Cell,
	type CellProps,
	Collection,
	type ColumnProps,
	Row,
	type RowProps,
	type TableHeaderProps,
	type TableProps,
	useTableOptions,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { Menu } from "lucide-react";

import { Button } from "../button/button";
import { Checkbox } from "../checkbox/checkbox";

const table = tv({
	slots: {
		root: "table min-h-[100px] border-separate border-spacing-0 rounded-xl border border-border p-4 outline-none",
		column: "border-border border-b-2 px-4 py-1 text-left outline-none",
		header: "text-fg after:table-row after:h-[2px]",
		label: "text-fg-3",
		row: "relative cursor-default rounded-xl text-fg outline-none ring-focus data-[focus-visible]:ring-2",
		cell: "px-4 py-2 outline-none ring-focus data-[focus-visible]:ring-2",
	},
});

const styles = table();

const TableBody = AriaTableBody;

const Table = ({
	children,
	className,
	...props
}: TableProps & { className?: string }) => (
	<AriaTable {...props} className={styles.root({ className })}>
		{children}
	</AriaTable>
);

const TableCell = ({
	children,
	className,
	...props
}: CellProps & { className?: string }) => (
	<Cell {...props} className={styles.cell({ className })}>
		{children}
	</Cell>
);

const TableColumn = ({
	children,
	className,
	...props
}: ColumnProps & { className?: string }) => (
	<AriaColumn {...props} className={styles.column({ className })}>
		{children}
	</AriaColumn>
);

const TableHeader = <T extends object>({
	children,
	className,
	columns,
	...props
}: TableHeaderProps<T> & { className?: string }) => {
	const { selectionBehavior, selectionMode, allowsDragging } =
		useTableOptions();
	return (
		<AriaTableheader {...props} className={styles.header({ className })}>
			{/* Add extra columns for drag and drop and selection. */}
			{allowsDragging && <TableColumn />}
			{selectionBehavior === "toggle" && (
				<TableColumn>
					{selectionMode === "multiple" && (
						<Checkbox slot="selection"> </Checkbox>
					)}
				</TableColumn>
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
	const { selectionBehavior, allowsDragging } = useTableOptions();
	return (
		<Row id={id} {...props} className={styles.row({ className })}>
			{allowsDragging && (
				<Cell className="ring-focus data-[focus-visible]:ring-2">
					<Button className="bg-transparent" slot="drag">
						<Menu className="h-4 w-4 text-fg" />
					</Button>
				</Cell>
			)}
			{selectionBehavior === "toggle" && (
				<Cell className="">
					<Checkbox slot="selection"> </Checkbox>
				</Cell>
			)}
			<Collection items={columns}>{children}</Collection>
		</Row>
	);
};

export { TableColumn, Table, TableBody, TableCell, TableHeader, TableRow };
