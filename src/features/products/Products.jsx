import { useState } from "react";
import { useProducts } from "./useProducts";

import { AddForm } from "./AddForm";
import { Product } from "./Product";

import { Table } from "../../shared/components/table/Table";
import { Button } from "../../shared/components/Button";
import { Modal } from "../../shared/components/modal/Modal";
import { Menus } from "../../shared/components/menus/Menus";

import { PAGE_SIZE } from "../../shared/constansts";

import { Filter } from "../../shared/components/filter/Filter";
import { Sort } from "../../shared/components/sort/Sort";
import { Pagination } from "../../shared/components/pagination/Pagination";
import { useFilter } from "../../shared/components/filter/useFilter";
import { useSort } from "../../shared/components/sort/useSort";
import { usePagination } from "../../shared/components/pagination/usePagination";

function Products() {
  const [addModal, setAddModal] = useState(false);
  const { products, handleAddProduct } = useProducts(setAddModal);
  const headers = ["ID", "Name", "Category", "Quantity", "Price", "Status", ""];

  const { getFilter: getStatus } = useFilter("status");
  const statusFilter = getStatus();

  const { getSort } = useSort();

  const { getPage } = usePagination();

  const filteredProducts =
    statusFilter === "all"
      ? products
      : products?.filter(
          (p) =>
            p.status.trim().toLowerCase().replace(" ", "") === statusFilter,
        );

  const sortValue = getSort();
  const [field, direction] = sortValue.split("-");
  const sortedProducts = filteredProducts?.toSorted((a, b) =>
    direction === "asc" ? a[field] - b[field] : b[field] - a[field],
  );

  const currPage = getPage();
  const paginatedProducts = sortedProducts?.filter((p, i) => {
    if (i >= (currPage - 1) * PAGE_SIZE && i < PAGE_SIZE * currPage) return p;
  });

  const sortOptions = [
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
  ];

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] overflow-auto py-4">
      {products?.length > 0 ? (
        <Menus>
          <Table>
            <Table.Title>Your Products</Table.Title>
            <Table.Operations>
              <Filter name="status">
                <Filter.Option>All</Filter.Option>
                <Filter.Option>Active</Filter.Option>
                <Filter.Option>Sold Out</Filter.Option>
                <Filter.Option>Hidden</Filter.Option>
              </Filter>
              <Sort>
                {sortOptions.map((opt) => (
                  <Sort.Option key={opt.value} opt={opt} />
                ))}
              </Sort>
            </Table.Operations>
            <Table.Header headers={headers} />
            {paginatedProducts.map((p) => (
              <Product key={p.id} product={p} gridSize={headers.length} />
            ))}
            <Table.Footer>
              <Pagination count={sortedProducts?.length} />
            </Table.Footer>
          </Table>
        </Menus>
      ) : (
        <div className="mt-40">
          <p className="text-center font-bold">You have no products</p>
        </div>
      )}
      {addModal && (
        <Modal onClose={() => setAddModal(false)}>
          <AddForm onSubmit={handleAddProduct} />
        </Modal>
      )}
      <Button classes={"mt-10"} onClick={() => setAddModal(true)}>
        Add Product
      </Button>
    </div>
  );
}
export { Products };
