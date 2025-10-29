function Table({ products }) {
  return (
    <div className="mt-10 flex flex-col text-center">
      <TableHeader />
      {products.map((item) => (
        <TableRow item={item} key={item.id} />
      ))}
    </div>
  );
}

function TableHeader() {
  return (
    <div className="grid grid-cols-5 rounded-md bg-gray-500/80 py-4">
      <TableHeaderItem>ID</TableHeaderItem>
      <TableHeaderItem>Name</TableHeaderItem>
      <TableHeaderItem>Category</TableHeaderItem>
      <TableHeaderItem>Quantity</TableHeaderItem>
      <TableHeaderItem>Status</TableHeaderItem>
    </div>
  );
}

function TableHeaderItem({ children }) {
  return <span className="font-bold">{children}</span>;
}

function TableRow({ item }) {
  return (
    <div className="grid grid-cols-5 py-4 odd:bg-gray-200">
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.category}</span>
      <span>{item.quantity}</span>
      <span>{item.status}</span>
    </div>
  );
}

export { Table };
