import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../services/apiOrders";

const OrderTable = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });
  console.log(data);

  const orders = [
    {
      orderId: 1,
      customerName: "John Doe",
      orderDate: "2024-08-01",
      status: "Delivered",
      totalAmount: "$120.00",
    },
    {
      orderId: 2,
      customerName: "Jane Smith",
      orderDate: "2024-08-03",
      status: "Processing",
      totalAmount: "$85.50",
    },
    // More orders...
  ];

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-200 text-left">
            <th className="py-2 px-4 border-b border-gray-200">Order ID</th>
            <th className="py-2 px-4 border-b border-gray-200">
              Customer Name
            </th>
            <th className="py-2 px-4 border-b border-gray-200">Order Date</th>
            <th className="py-2 px-4 border-b border-gray-200">Status</th>
            <th className="py-2 px-4 border-b border-gray-200">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-200">
                {order.orderId}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {order.customerName}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {order.orderDate}
              </td>
              <td
                className={`py-2 px-4 border-b border-gray-200 ${getStatusClass(
                  order.status
                )}`}
              >
                {order.status}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {order.totalAmount}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
               <button>Cancle Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

const getStatusClass = (status) => {
  switch (status) {
    case "Delivered":
      return "text-green-600 font-bold";
    case "Processing":
      return "text-yellow-600 font-bold";
    case "Cancelled":
      return "text-red-600 font-bold";
    default:
      return "";
  }
};
