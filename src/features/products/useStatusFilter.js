import { useFilter } from "../../shared/useFilter";

function useStatusFilter() {
  const { getFilter, setFilter } = useFilter();

  function setStatus(value) {
    setFilter("status", value);
  }

  function getStatus(defaultValue) {
    return getFilter("status", defaultValue);
  }

  return { getStatus, setStatus };
}

export { useStatusFilter };
