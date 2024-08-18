import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "../../services/apiOrders";
import toast from "react-hot-toast";

const OrderRow = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => cancelOrder(id),
    //or //becoz samevalue id
    // mutationFn:cancelOrder()
    onSuccess: () => {
      toast.success("Order Canceled");
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <div>
      <button onClick={() => mutate("id")} disabled={isDeleting}>
        cancel order
      </button>
    </div>
  );
};

export default OrderRow;
