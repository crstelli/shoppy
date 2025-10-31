import { useState } from "react";
import { useProducts } from "./useProducts";
import { useStatusFilter } from "./useStatusFilter";
import { useSortBy } from "../../shared/useSortBy";

import { AddForm } from "./AddForm";
import { Product } from "./Product";
import { TableOperations } from "./TableOperations";

import { Table } from "../../shared/components/table/Table";
import { Button } from "../../shared/components/Button";
import { Modal } from "../../shared/components/modal/Modal";
import { Menus } from "../../shared/components/menus/Menus";

function Products() {
  const [addModal, setAddModal] = useState(false);
  const { products, handleAddProduct } = useProducts(setAddModal);
  const headers = ["ID", "Name", "Category", "Quantity", "Price", "Status", ""];

  const { getStatus } = useStatusFilter();
  const { getSortBy } = useSortBy();

  const statusFilter = getStatus("all");

  const filteredProducts =
    statusFilter === "all"
      ? products
      : products?.filter(
          (p) =>
            p.status.trim().toLowerCase().replace(" ", "") === statusFilter,
        );

  const sortBy = getSortBy();
  const [field, direction] = sortBy.split("-");
  const sortedProducts = filteredProducts?.toSorted((a, b) =>
    direction === "asc" ? a[field] - b[field] : b[field] - a[field],
  );

  console.log(sortedProducts);

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] overflow-auto py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-700">Your Products</h3>
        <TableOperations />
      </div>
      {products?.length > 0 ? (
        <Menus>
          <Table>
            <Table.Header headers={headers} />
            {sortedProducts.map((p) => (
              <Product key={p.id} product={p} gridSize={headers.length} />
            ))}
          </Table>
        </Menus>
      ) : (
        <div className="mt-40">
          <p className="text-center font-bold">You have no products</p>
        </div>
      )}
      {addModal && (
        <Modal onClose={() => setAddModal(false)}>
          <AddForm onSubmit={handleAddProduct} />
        </Modal>
      )}
      <Button classes={"mt-10"} onClick={() => setAddModal(true)}>
        Add Product
      </Button>
    </div>
  );
}
export { Products };
