import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProduct as addProductApi,
  getProducts,
} from "../../services/apiProducts";

import toast from "react-hot-toast";

function useProducts(setAddModal) {
  const queryClient = useQueryClient();

  const { error, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (error) toast.error(error.message);

  const { mutate: addProduct } = useMutation({
    mutationFn: addProductApi,
    onSuccess: () => {
      toast.success("Product addedd succesfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  function handleAddProduct(data, reset) {
    addProduct(data);

    queryClient.invalidateQueries({ queryKey: ["products"] });
    reset();
    setAddModal(false);
  }

  return { products, handleAddProduct };
}

export { useProducts };
