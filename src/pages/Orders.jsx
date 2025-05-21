import PageHeader from "../components/pageHeader";

export default function Orders() {
  return (
    <div id="dashboard-container">
      <PageHeader title="Order" breadcrumb={["Dashboard", "Order List"]}>
        <button className="bg-hijau text-white px-4 py-2 rounded-lg">
          Add New Order
        </button>
      </PageHeader>

      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        Ini Halaman Orders
      </div>
    </div>
  );
}
