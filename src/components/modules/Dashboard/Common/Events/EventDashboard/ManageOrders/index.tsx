import ManageOrdersTable from "./ManageOrdersTable";

export const OrdersContent = () => (
  <div>
    <h1 className="text-2xl font-semibold text-gray-900 mb-4">Manage Orders</h1>
    <p className="text-gray-500">
      Here you can view, approve, or cancel orders.
    </p>

    <div>
      <ManageOrdersTable />
    </div>
  </div>
);
