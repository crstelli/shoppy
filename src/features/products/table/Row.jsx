import { Tag } from "./Tag";
import { Trash, Pen } from "lucide-react";

function Row({ item }) {
  return (
    <div className="mx-auto grid grid-cols-[100px_300px_200px_100px_100px_200px] px-10 py-4 odd:bg-gray-200">
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.category}</span>
      <span>{item.quantity}</span>
      <Tag>{item.status}</Tag>
      <div className="mx-auto flex items-center gap-4">
        <Trash className="cursor-pointer text-red-800" />
        <Pen className="cursor-pointer text-gray-800" />
      </div>
    </div>
  );
}

export { Row };
