import { useSearchParams } from "react-router";

function useSortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  function getSortBy() {
    return searchParams.get("sortBy") || "name-asc";
  }

  function setSortBy(value) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  return { getSortBy, setSortBy };
}

export { useSortBy };
