import { useSortBy } from "../hooks/useSortBy";

function SortBy({ options }) {
  const { getSortBy, setSortBy } = useSortBy();

  return (
    <div className="flex">
      <select onChange={(e) => setSortBy(e.target.value)} value={getSortBy()}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export { SortBy };
