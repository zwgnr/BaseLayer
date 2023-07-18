import {
  Column,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/base/table";

export const TableExample = () => {
  return (
    <Table aria-label="Tokens" selectionMode="multiple">
      <TableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Token</Column>
        <Column>Env</Column>
        <Column></Column>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Dev</TableCell>
          <TableCell>****1822</TableCell>
          <TableCell>preview</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Production</TableCell>
          <TableCell>****3345</TableCell>
          <TableCell>prod</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>beta</TableCell>
          <TableCell>****6431</TableCell>
          <TableCell>preview</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
