import { useQuery } from "@tanstack/react-query";
import { Table } from "../../shared/components/table/Table";

import { getUserList } from "../../services/apiAuth";
import { UserRow } from "./UserRow";

function UsersTable() {
  const { data } = useQuery({
    queryKey: ["usersList"],
    queryFn: getUserList,
  });

  const users = data?.users;

  const headers = ["ID", "Email", "Full Name", ""];

  return (
    <div className="w-full">
      <Table>
        <Table.Title>Users List</Table.Title>
        <Table.Header headers={headers} />
        {users?.map((us) => (
          <UserRow gridSize={headers.length} key={us.id} user={us} />
        ))}
      </Table>
    </div>
  );
}

export { UsersTable };
