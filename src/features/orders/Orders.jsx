import { useState } from "react";
import { useOrders } from "./useOrders";

import { Order } from "./Order";
import { AddForm } from "./AddForm";

import { Table } from "../../shared/components/table/Table";
import { Menus } from "../../shared/components/menus/Menus";
import { Modal } from "../../shared/components/modal/Modal";

import { Button } from "../../shared/components/Button";

// import { Sort } from "../../shared/components/sort/Sort";
import { Filter } from "../../shared/components/filter/Filter";
import { Pagination } from "../../shared/components/pagination/Pagination";
// import { useSort } from "../../shared/components/sort/useSort";
import { useFilter } from "../../shared/components/filter/useFilter";
import { usePagination } from "../../shared/components/pagination/usePagination";
import { PAGE_SIZE } from "../../shared/constansts";

function Orders() {
  const [addModal, setAddModal] = useState(false);
  const { orders, handleAddOrder } = useOrders(setAddModal);

  const headers = ["ID", "Delivery", "Status", "Actions"]; // TODO: Sistemare

  const { getFilter: getStatus } = useFilter("status");
  const statusFilter = getStatus();

  const filteredOrders =
    statusFilter === "all"
      ? orders
      : orders?.filter(
          (p) =>
            p.status.trim().toLowerCase().replace(" ", "") === statusFilter,
        );

  const { getPage } = usePagination();
  const currPage = getPage();
  const paginatedOrders = filteredOrders?.filter((o, i) => {
    if (i >= (currPage - 1) * PAGE_SIZE && i < PAGE_SIZE * currPage) return o;
  });

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] overflow-auto py-4">
      {orders?.length > 0 ? (
        <Menus>
          <Table>
            <Table.Title>Your Orders</Table.Title>
            <Table.Operations>
              <Filter name="status">
                <Filter.Option>All</Filter.Option>
                <Filter.Option>Received</Filter.Option>
                <Filter.Option>Completed</Filter.Option>
                <Filter.Option>Delivery</Filter.Option>
              </Filter>
            </Table.Operations>
            <Table.Header headers={headers} />
            {paginatedOrders.map((c) => (
              <Order key={c.id} order={c} gridSize={headers.length} />
            ))}
            <Table.Footer>
              <Pagination count={paginatedOrders.length} />
            </Table.Footer>
          </Table>
        </Menus>
      ) : (
        <div className="mt-40">
          <p className="text-center font-bold">You have no orders</p>
        </div>
      )}
      <Button onClick={() => setAddModal(true)}>Create Order</Button>

      {addModal && (
        <Modal onClose={() => setAddModal(false)}>
          <AddForm onSubmit={handleAddOrder} />
        </Modal>
      )}
    </div>
  );
}
export { Orders };
