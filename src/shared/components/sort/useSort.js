import { useSearchParams } from "react-router";

function useSort(defaultOpt = "name-asc") {
  const [searchParams, setSearchParams] = useSearchParams();

  function getSort() {
    return searchParams.get("sort") || defaultOpt;
  }

  function setSort(value) {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  }

  return { getSort, setSort };
}

export { useSort };
