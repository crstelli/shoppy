import { useState } from "react";
import { useProduct } from "./useProduct";

import { EditForm } from "./EditForm";
import { Table } from "../../shared/components/table/Table";
import { Modal } from "../../shared/components/modal/Modal";

import { PenBox, Trash } from "lucide-react";

function Product({ product, gridSize }) {
  const [isEditing, setIsEditing] = useState(false);
  const { handleDelete, handleSubmitEdit } = useProduct(product, setIsEditing);

  return (
    <>
      <Table.Row key={product.id} size={gridSize}>
        <Table.Cell>{product.id}</Table.Cell>
        <Table.Cell>{product.name}</Table.Cell>
        <Table.Cell>{product.category}</Table.Cell>
        <Table.Cell>{product.quantity}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell>
          <Table.Tag>{product.status}</Table.Tag>
        </Table.Cell>
        <Table.Cell classes={"flex items-center mx-auto justify-center gap-4"}>
          <Trash
            onClick={() => handleDelete(product.id)}
            className="cursor-pointer text-gray-800"
          />
          <PenBox
            onClick={() => setIsEditing(true)}
            className="cursor-pointer text-gray-800"
          />
        </Table.Cell>
      </Table.Row>
      {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <EditForm item={product} onSubmit={handleSubmitEdit} />
        </Modal>
      )}
    </>
  );
}

export { Product };
