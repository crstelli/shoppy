import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, editProduct } from "../../../services/apiProducts";
import toast from "react-hot-toast";

function useRow(item, setIsEditing) {
  const queryClient = useQueryClient();
  const { mutate: handleDelete } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product eliminated successfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: handleEdit } = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product edited successfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  function handleSubmitEdit(data, reset) {
    const newItem = { ...item, ...data };

    handleEdit(newItem);
    reset();
    setIsEditing(false);
  }

  return { handleDelete, handleSubmitEdit };
}

export { useRow };
