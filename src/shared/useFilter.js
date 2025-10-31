import { useSearchParams } from "react-router";

function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function getFilter(value, defaultValue) {
    const filter = searchParams.get(value) || defaultValue;
    return filter;
  }

  function setFilter(filter, value) {
    searchParams.set(filter, value);
    setSearchParams(searchParams);
  }

  return { getFilter, setFilter };
}

export { useFilter };
