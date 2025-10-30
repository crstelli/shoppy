import { useState } from "react";
import { useProducts } from "./useProducts";

import { Table } from "./table/Table";
import { AddForm } from "./AddForm";

import { Button } from "../../shared/components/Button";
import { Modal } from "../../shared/components/modal/Modal";

function Products() {
  const [addModal, setAddModal] = useState(false);
  const { products, handleAddProduct } = useProducts(setAddModal);

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] overflow-auto py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-700">Your Products</h3>
        <Button onClick={() => setAddModal(true)}>Add Product</Button>
      </div>
      {products ? (
        <Table products={products} />
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
