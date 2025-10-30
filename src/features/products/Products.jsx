import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { getProducts } from "../../services/apiProducts";
import { addProduct as addProductApi } from "../../services/apiProducts";

import { Table } from "./table/Table";
import { AddForm } from "./AddForm";

import { Button } from "../../shared/components/Button";
import { Modal } from "../../shared/components/modal/Modal";

function Products() {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  const { error, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { mutate: addProduct } = useMutation({
    mutationFn: addProductApi,
  });

  if (error) toast.error(error.message);

  function handleSubmit(data, reset) {
    addProduct(data);

    queryClient.invalidateQueries({ queryKey: ["products"] });
    reset();
    setShowModal(false);
  }

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] overflow-auto py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-700">Your Products</h3>
        <Button onClick={() => setShowModal(true)}>Add Product</Button>
      </div>
      {products ? (
        <Table products={products} />
      ) : (
        <div className="mt-40">
          <p className="text-center font-bold">You have no products</p>
        </div>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddForm onSubmit={handleSubmit} />
        </Modal>
      )}
    </div>
  );
}
export { Products };
