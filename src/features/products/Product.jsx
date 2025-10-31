import { useState } from "react";
import { useProduct } from "./useProduct";

import { EditForm } from "./EditForm";
import { Table } from "../../shared/components/table/Table";
import { Modal } from "../../shared/components/modal/Modal";
import { Menus } from "../../shared/components/menus/Menus";

import { DeleteModal } from "../../shared/components/DeleteModal";

function Product({ product, gridSize }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
        <Table.Cell>
          <Menus.Menu>
            <Menus.Toggle id={product.id} />

            <Menus.List id={product.id}>
              <Menus.Button onClick={() => setIsEditing(true)}>
                Edit
              </Menus.Button>
              <Menus.Button onClick={() => setIsDeleting(true)}>
                Delete
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Table.Cell>
      </Table.Row>
      {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <EditForm item={product} onSubmit={handleSubmitEdit} />
        </Modal>
      )}

      {isDeleting && (
        <DeleteModal
          onConfirm={() => handleDelete(product.id)}
          onClose={() => setIsDeleting(false)}
        />
      )}
    </>
  );
}

export { Product };
