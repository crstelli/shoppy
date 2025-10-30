import { useState } from "react";
import { useCategories } from "./useCategories";

import { Category } from "./Category";

import { Table } from "../../shared/components/table/Table";
import { Button } from "../../shared/components/Button";
import { Modal } from "../../shared/components/modal/Modal";

function Categories() {
  const [addModal, setAddModal] = useState(false);
  const { categories, handleAddCategory } = useCategories(setAddModal);

  const headers = ["ID", "Category", "Actions"];

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] overflow-auto py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-700">Your Categories</h3>
        <Button onClick={() => setAddModal(true)}>Add Category</Button>
      </div>
      {categories?.length > 0 ? (
        <Table>
          <Table.Header headers={headers} />
          {categories.map((c) => (
            <Category key={c.id} category={c} gridSize={headers.length} />
          ))}
        </Table>
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
    </div>
  );
}
export { Categories };
