import { useState } from "react";
import { useProducts } from "./useProducts";

import { AddForm } from "./AddForm";
import { Product } from "./Product";

import { Table } from "../../shared/components/table/Table";
import { Button } from "../../shared/components/Button";
import { Modal } from "../../shared/components/modal/Modal";

function Products() {
  const [addModal, setAddModal] = useState(false);
  const { products, handleAddProduct } = useProducts(setAddModal);

  const headers = ["ID", "Name", "Category", "Quantity", "Status", "Actions"];

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] overflow-auto py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-700">Your Products</h3>
        <Button onClick={() => setAddModal(true)}>Add Product</Button>
      </div>
      {products?.length > 0 ? (
        <Table>
          <Table.Header headers={headers} />
          {products.map((p) => (
            <Product key={p.id} product={p} gridSize={headers.length} />
          ))}
        </Table>
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
    </div>
  );
}
export { Products };
