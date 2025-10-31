import { useSearchParams } from "react-router";

function usePagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  function getPage() {
    return Number(searchParams.get("page") || 1);
  }

  function setPage(value) {
    searchParams.set("page", value);
    setSearchParams(searchParams);
  }

  return { getPage, setPage };
}

export { usePagination };
