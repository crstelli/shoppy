import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrders, addOrder as addOrderApi } from "../../services/apiOrders";

import toast from "react-hot-toast";

function useOrders(setAddModal) {
  const queryClient = useQueryClient();

  const { error, data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
  if (error) toast.error(error.message);

  const { mutate: addOrder } = useMutation({
    mutationFn: addOrderApi,
    onSuccess: () => {
      toast.success("Order addedd succesfully.");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  function handleAddOrder(data, reset) {
    addOrder(data);

    reset();
    setAddModal(false);
  }

  return { orders, handleAddOrder };
}

export { useOrders };
