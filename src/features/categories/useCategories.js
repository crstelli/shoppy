import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCategories,
  addCategory as addCategoryApi,
} from "../../services/apiCategories";

import toast from "react-hot-toast";

function useCategories(setAddModal) {
  const queryClient = useQueryClient();

  const { error, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  if (error) toast.error(error.message);

  const { mutate: addCategory } = useMutation({
    mutationFn: addCategoryApi,
    onSuccess: () => {
      toast.success("Category addedd succesfully.");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  function handleAddCategory(data, reset) {
    addCategory(data);

    reset();
    setAddModal(false);
  }

  return { categories, handleAddCategory };
}

export { useCategories };
