import { useState } from "react";
import { useCategories } from "./useCategories";

import { Category } from "./Category";
import { AddForm } from "./AddForm";

import { Table } from "../../shared/components/table/Table";
import { Button } from "../../shared/components/Button";
import { Modal } from "../../shared/components/modal/Modal";
import { Menus } from "../../shared/components/menus/Menus";

import { Sort } from "../../shared/components/sort/Sort";
import { useSort } from "../../shared/components/sort/useSort";
import { Pagination } from "../../shared/components/pagination/Pagination";
import { usePagination } from "../../shared/components/pagination/usePagination";
import { PAGE_SIZE } from "../../shared/constansts";

function Categories() {
  const [addModal, setAddModal] = useState(false);
  const { categories, handleAddCategory } = useCategories(setAddModal);

  const headers = ["ID", "Category", ""];

  const sortOptions = [
    {
      value: "name-asc",
      label: "Sort by name (A-Z)",
    },
    {
      value: "name-desc",
      label: "Sort by name (Z-A)",
    },
  ];

  const { getSort } = useSort();
  const sortValue = getSort();
  const [field, direction] = sortValue.split("-");
  const sortedCategories = categories?.toSorted((a, b) => {
    let nameA = a[field].toUpperCase();
    let nameB = b[field].toUpperCase();

    const modifier = direction === "asc" ? -1 : 1;

    return (nameA < nameB ? 1 : -1) * modifier;
  });

  const { getPage } = usePagination();
  const currPage = getPage();
  const paginatedCategories = sortedCategories?.filter((c, i) => {
    if (i >= (currPage - 1) * PAGE_SIZE && i < PAGE_SIZE * currPage) return c;
  });

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] overflow-auto py-4">
      {categories?.length > 0 ? (
        <Menus>
          <Table>
            <Table.Title>Your Categories</Table.Title>
            <Table.Operations>
              <Sort>
                {sortOptions.map((opt) => (
                  <Sort.Option opt={opt} key={opt.value} />
                ))}
              </Sort>
            </Table.Operations>
            <Table.Header headers={headers} />
            {paginatedCategories.map((c) => (
              <Category key={c.id} category={c} gridSize={headers.length} />
            ))}
            <Table.Footer>
              <Pagination count={sortedCategories.length} />
            </Table.Footer>
          </Table>
        </Menus>
      ) : (
        <div className="mt-40">
          <p className="text-center font-bold">You have no categories</p>
        </div>
      )}
      {addModal && (
        <Modal onClose={() => setAddModal(false)}>
          <AddForm onSubmit={handleAddCategory} />
        </Modal>
      )}
      <Button onClick={() => setAddModal(true)}>Add Category</Button>
    </div>
  );
}
export { Categories };
