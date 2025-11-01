import { FilterContext } from "./FilterContext";
import { Option } from "./Option";

function Filter({ name, children }) {
  return (
    <div className="flex gap-2 overflow-hidden rounded-xl border border-gray-400">
      <FilterContext.Provider value={{ name }}>
        {children}
      </FilterContext.Provider>
    </div>
  );
}

Filter.Option = Option;

export { Filter };
