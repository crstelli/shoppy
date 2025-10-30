import { useState } from "react";

import { EditForm } from "./EditForm";
import { Tag } from "./Tag";

import { Modal } from "../../../shared/components/modal/Modal";
import { Trash, Pen } from "lucide-react";
import { useRow } from "./useRow";

function Row({ item }) {
  const [isEditing, setIsEditing] = useState(false);
  const { handleDelete, handleSubmitEdit } = useRow(item.setIsEditing);

  return (
    <div className="mx-auto grid w-[90%] max-w-[900px] grid-cols-[1fr_3fr_2fr_1fr_1fr_2fr] px-10 py-4 odd:bg-gray-200">
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
