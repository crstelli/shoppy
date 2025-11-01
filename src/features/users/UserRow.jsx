import { Table } from "../../shared/components/table/Table";

function UserRow({ user, gridSize }) {
  return (
    <Table.Row size={gridSize}>
      <Table.Cell>{user.id}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.fullName}</Table.Cell>
    </Table.Row>
  );
}

export { UserRow };
