import { useOrder } from "./useOrder";
import { Table } from "../../shared/components/table/Table";

import { Menus } from "../../shared/components/menus/Menus";

function Order({ order, gridCols }) {
  const { handleDelete } = useOrder();

  let tagColor;
  if (order.status === "received") tagColor = "gray";
  if (order.status === "completed") tagColor = "green";
  if (order.status === "delivery") tagColor = "orange";
  if (order.status === "cancelled") tagColor = "red";

  return (
    <>
      <Table.Row key={order.id} gridCols={gridCols}>
        <Table.Cell>{order.id}</Table.Cell>
        <Table.Cell>{order.delivery}</Table.Cell>
        <Table.Cell>
          <Table.Tag color={tagColor}>{order.status}</Table.Tag>
        </Table.Cell>
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
