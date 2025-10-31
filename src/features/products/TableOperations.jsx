import { SortBy } from "../../shared/components/SortBy";
import { StatusFilter } from "./StatusFilter";

function TableOperations() {
  return (
    <div className="items-centers flex gap-4">
      <StatusFilter />
      <SortBy
        options={[
          {
            value: "quantity-asc",
            label: "Sort by quantity (low first)",
          },
          {
            value: "quantity-desc",
            label: "Sort by quantity (high first)",
          },
          {
            value: "price-asc",
            label: "Sort by price (low first)",
          },
          {
            value: "price-desc",
            label: "Sort by price (high first)",
          },
        ]}
      />
    </div>
  );
}

export { TableOperations };
