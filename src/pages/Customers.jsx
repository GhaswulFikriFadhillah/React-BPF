import PageHeader from "../components/pageHeader";

export default function Customers() {
  return (
    <div id="dashboard-container">
      <PageHeader title="Customer" breadcrumb={["Dashboard", "Customer List"]}>
        <button className="bg-hijau text-white px-4 py-2 rounded-lg">
          Add New Customer
        </button>
      </PageHeader>

      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        Tabel Data
      </div>
    </div>
  );
}
