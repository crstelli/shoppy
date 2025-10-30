import { useOrder } from "./useOrder";
import { Table } from "../../shared/components/table/Table";

import { Trash } from "lucide-react";

function Order({ order, gridSize }) {
  const { handleDelete } = useOrder();

  return (
    <>
      <Table.Row key={order.id} size={gridSize}>
        <Table.Cell>{order.id}</Table.Cell>
        <Table.Cell>{order.delivery}</Table.Cell>
        <Table.Cell>{order.status}</Table.Cell>
        <Table.Cell>
          <Trash
            onClick={() => handleDelete(order.id)}
            className="mx-auto cursor-pointer text-gray-800"
          />
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export { Order };
