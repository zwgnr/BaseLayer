import {
  Column,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/base/table";
import { useAsyncList } from "@react-stately/data";

interface Invoice {
  [key: string]: any;
  title: string;
  price: number;
  brand: string;
}

export function TableSortable() {
  let list = useAsyncList<Invoice>({
    async load({ signal }) {
      let res = await fetch(`https://dummyjson.com/products?limit=10`, {
        signal,
      });
      let json = await res.json();
      return {
        items: json.products,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          if (!sortDescriptor.column) {
            return 0;
          }
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }
          return cmp;
        }),
      };
    },
  });

  return (
    <Table
      aria-label="Example table with client side sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
    >
      <TableHeader>
        <Column id="item" isRowHeader allowsSorting>
          Name
        </Column>
        <Column id="price" allowsSorting>
          Price
        </Column>
        <Column id="brand" allowsSorting>
          Brand
        </Column>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <TableRow id={item.title}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.brand}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
