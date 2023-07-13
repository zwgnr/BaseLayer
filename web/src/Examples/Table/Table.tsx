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
    <Table aria-label="Files" selectionMode="multiple">
      <TableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Date Modified</Column>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Games</TableCell>
          <TableCell>File folder</TableCell>
          <TableCell>6/7/2020</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Program Files</TableCell>
          <TableCell>File folder</TableCell>
          <TableCell>4/7/2021</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>bootmgr</TableCell>
          <TableCell>System file</TableCell>
          <TableCell>11/20/2010</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
