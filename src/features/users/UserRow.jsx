import { Table } from "../../shared/components/table/Table";

function UserRow({ user, gridCols }) {
  return (
    <Table.Row gridCols={gridCols}>
      <Table.Cell>{user.id}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.fullName}</Table.Cell>
    </Table.Row>
  );
}

export { UserRow };
