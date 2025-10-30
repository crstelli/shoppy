import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../services/apiCategories";
import toast from "react-hot-toast";

function useCategory() {
  const queryClient = useQueryClient();
  const { mutate: handleDelete } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      toast.success("Category eliminated successfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { handleDelete };
}

export { useCategory };
