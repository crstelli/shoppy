import { useCategory } from "./useCategory";
import { Table } from "../../shared/components/table/Table";

import { Trash } from "lucide-react";

function Category({ category, gridSize }) {
  const { handleDelete } = useCategory();

  return (
    <>
      <Table.Row key={category.id} size={gridSize}>
        <Table.Cell>{category.id}</Table.Cell>
        <Table.Cell>{category.name}</Table.Cell>
        <Table.Cell>
          <Trash
            onClick={() => handleDelete(category.id)}
            className="mx-auto cursor-pointer text-gray-800"
          />
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export { Category };
