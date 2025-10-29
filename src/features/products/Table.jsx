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
    <div className="mx-auto grid grid-cols-[100px_300px_200px_100px_100px] rounded-md bg-gray-500/80 px-10 py-4">
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
    <div className="mx-auto grid grid-cols-[100px_300px_200px_100px_100px] px-10 py-4 odd:bg-gray-200">
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.category}</span>
      <span>{item.quantity}</span>
      <Tag>{item.status}</Tag>
    </div>
  );
}

function Tag({ children }) {
  if (children === "active")
    return (
      <span className="rounded-full bg-green-300 py-1 text-sm uppercase">
        {children}
      </span>
    );

  if (children === "sold out")
    return (
      <span className="rounded-full bg-red-300 py-1 text-sm uppercase">
        {children}
      </span>
    );

  if (children === "hidden")
    return (
      <span className="rounded-full bg-orange-300 py-1 text-sm uppercase">
        {children}
      </span>
    );
}

export { Table };
