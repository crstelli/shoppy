import { Option } from "./Option";
import { useSort } from "./useSort";

function Sort({ children }) {
  const { getSort, setSort } = useSort();

  return (
    <div className="flex">
      <select onChange={(e) => setSort(e.target.value)} value={getSort()}>
        {children}
      </select>
    </div>
  );
}

Sort.Option = Option;

export { Sort };
