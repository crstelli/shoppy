import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, editProduct } from "../../../services/apiProducts";

import { Tag } from "./Tag";
import { Trash, Pen } from "lucide-react";
import toast from "react-hot-toast";
import { EditForm } from "./EditForm";
import { Modal } from "../../../shared/components/modal/Modal";

function Row({ item }) {
  const [isEditing, setIsEditing] = useState(false);

  const queryClient = useQueryClient();
  const { mutate: handleDelete } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product eliminated successfully.");
    },
  });

  const { mutate: handleEdit } = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product edited successfully.");
    },
  });

  function handleSubmitEdit(data, reset) {
    const newItem = { ...item, ...data };

    handleEdit(newItem);
    reset();
    setIsEditing(false);
  }

  return (
    <div className="mx-auto grid grid-cols-[100px_300px_200px_100px_100px_200px] px-10 py-4 odd:bg-gray-200">
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.category}</span>
      <span>{item.quantity}</span>
      <Tag>{item.status}</Tag>
      <div className="mx-auto flex items-center gap-4">
        <Trash
          onClick={() => handleDelete(item.id)}
          className="cursor-pointer text-red-800"
        />
        <Pen
          onClick={() => setIsEditing(true)}
          className="cursor-pointer text-gray-800"
        />
      </div>

      {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <EditForm onSubmit={handleSubmitEdit} item={item} />
        </Modal>
      )}
    </div>
  );
}

export { Row };
