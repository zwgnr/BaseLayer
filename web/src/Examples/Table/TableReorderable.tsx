import {
  Column,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/base/table";
import { useDragAndDrop } from "react-aria-components";
import { useListData } from "react-stately";

export function TableReorderable() {
  let list = useListData({
    initialItems: [
      { id: 1, name: "Dev", token: "****1822", env: "prod" },
      { id: 2, name: "Production", token: "****3345", env: "preview" },
      { id: 3, name: "beta", token: "****6431", env: "preview" },
    ],
  });

  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => ({
        "text/plain": list.getItem(key).name,
      })),
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys);
      }
    },
  });

  return (
    <Table
      aria-label="Tokens"
      selectionMode="multiple"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Token</Column>
        <Column>Env</Column>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.token}</TableCell>
            <TableCell>{item.env}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
