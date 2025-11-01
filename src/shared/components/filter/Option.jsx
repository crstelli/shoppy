import { useContext } from "react";
import { FilterContext } from "./FilterContext";

import { useFilter } from "./useFilter";

function Option({ children }) {
  const { name } = useContext(FilterContext);

  const { getFilter, setFilter } = useFilter(name);
  const filterName = children.toLowerCase().trim().replace(" ", "");

  const active = getFilter() === filterName;

  return (
    <button
      disabled={active}
      onClick={() => setFilter(filterName)}
      className={`cursor-pointer px-3 py-1 disabled:cursor-not-allowed ${active && "bg-gray-700 text-gray-100"}`}
    >
      {children}
    </button>
  );
}

export { Option };
