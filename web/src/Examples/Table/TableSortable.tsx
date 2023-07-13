import {
  Column,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/base/table";
import { useAsyncList } from "@react-stately/data";

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

export function TableSortable() {
  let list = useAsyncList<Character>({
    async load({ signal }) {
      let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
        signal,
      });
      let json = await res.json();
      return {
        items: json.results,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
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
        <Column id="name" isRowHeader allowsSorting>
          Name
        </Column>
        <Column id="height" allowsSorting>
          Height
        </Column>
        <Column id="mass" allowsSorting>
          Mass
        </Column>
        <Column id="birth_year" allowsSorting>
          Birth Year
        </Column>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <TableRow id={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.height}</TableCell>
            <TableCell>{item.mass}</TableCell>
            <TableCell>{item.birth_year}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
