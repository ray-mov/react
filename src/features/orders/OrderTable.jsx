import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../services/apiOrders";

const OrderTable = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });
  console.log(data);

  if (isLoading) return <h1>Loading</h1>

  return (
    <div>
      <h1>A</h1>
    </div>
  );
};

export default OrderTable;
