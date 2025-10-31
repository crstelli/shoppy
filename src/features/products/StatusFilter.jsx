import { useStatusFilter } from "./useStatusFilter";

function StatusFilter() {
  return (
    <div className="flex gap-2 overflow-hidden rounded-xl border border-gray-400">
      <Option>All</Option>
      <Option>Active</Option>
      <Option>Sold Out</Option>
      <Option>Hidden</Option>
    </div>
  );
}

function Option({ children }) {
  const { getStatus, setStatus } = useStatusFilter();
  const filterName = children.toLowerCase().trim().replace(" ", "");

  const active = getStatus("all") === filterName;

  return (
    <span
      onClick={() => setStatus(filterName)}
      className={`cursor-pointer px-3 py-1 ${active && "bg-gray-700 text-gray-100"}`}
    >
      {children}
    </span>
  );
}

export { StatusFilter };
