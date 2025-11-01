import { useSearchParams } from "react-router";

function useFilter(name) {
  const [searchParams, setSearchParams] = useSearchParams();

  function getFilter() {
    const filter = searchParams.get(name) || "all";
    return filter;
  }

  function setFilter(value) {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }

  return { getFilter, setFilter };
}

export { useFilter };
