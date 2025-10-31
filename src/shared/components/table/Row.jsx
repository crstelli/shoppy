// import { useState } from "react";
// import { useRow } from "./useRow";

// import { EditForm } from "../../../features/products/table/EditForm";
// import { Tag } from "./Tag";

// import { Modal } from "../../../shared/components/modal/Modal";
// import { Trash, Pen } from "lucide-react";

function Row({ children, size }) {
  // const [isEditing, setIsEditing] = useState(false);
  // const { handleDelete, handleSubmitEdit } = useRow(item.setIsEditing);
  return (
    <>
      <div
        className="mx-auto grid w-[90%] max-w-[900px] rounded-md px-10 py-4"
        style={{
          gridTemplateColumns: `repeat(${size - 1}, 2fr) 3fr`,
        }}
      >
        {children}
      </div>
      {/* <span>{item.id}</span>
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
      </div> */}

      {/* {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <EditForm onSubmit={handleSubmitEdit} item={item} />
        </Modal>
      )} */}
    </>
  );
}

export { Row };
