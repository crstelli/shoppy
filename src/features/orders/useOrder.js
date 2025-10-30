import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder } from "../../services/apiOrders";
import toast from "react-hot-toast";

function useOrder() {
  const queryClient = useQueryClient();
  const { mutate: handleDelete } = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"]);
      toast.success("Order eliminated successfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { handleDelete };
}

export { useOrder };
