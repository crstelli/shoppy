import { useOrder } from "./useOrder";
import { Table } from "../../shared/components/table/Table";

import { Menus } from "../../shared/components/menus/Menus";

function Order({ order, gridSize }) {
  const { handleDelete } = useOrder();

  return (
    <>
      <Table.Row key={order.id} size={gridSize}>
        <Table.Cell>{order.id}</Table.Cell>
        <Table.Cell>{order.delivery}</Table.Cell>
        <Table.Cell>{order.status}</Table.Cell>
        {/* <Table.Cell>
          <Trash
            onClick={() => handleDelete(order.id)}
            className="mx-auto cursor-pointer text-gray-800"
          />
        </Table.Cell> */}
        <Table.Cell>
          <Menus.Menu>
            <Menus.Toggle id={order.id} />

            <Menus.List id={order.id}>
              <Menus.Button onClick={() => handleDelete(order.id)}>
                Delete
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export { Order };
