import { useState } from "react";
import { useOrders } from "./useOrders";

import { Order } from "./Order";
import { AddForm } from "./AddForm";

import { Table } from "../../shared/components/table/Table";
import { Button } from "../../shared/components/Button";
import { Modal } from "../../shared/components/modal/Modal";

function Orders() {
  const [addModal, setAddModal] = useState(false);
  const { orders, handleAddOrder } = useOrders(setAddModal);

  const headers = ["ID", "Delivery", "Status", "Actions"]; // TODO: Sistemare

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] overflow-auto py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-700">Your Orders</h3>
        <Button onClick={() => setAddModal(true)}>Create Order</Button>
      </div>
      {orders?.length > 0 ? (
        <Table>
          <Table.Header headers={headers} />
          {orders.map((c) => (
            <Order key={c.id} order={c} gridSize={headers.length} />
          ))}
        </Table>
      ) : (
        <div className="mt-40">
          <p className="text-center font-bold">You have no orders</p>
        </div>
      )}
      {addModal && (
        <Modal onClose={() => setAddModal(false)}>
          <AddForm onSubmit={handleAddOrder} />
        </Modal>
      )}
    </div>
  );
}
export { Orders };
