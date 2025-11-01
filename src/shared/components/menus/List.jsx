import { useContext } from "react";
import { MenusContext } from "./MenusContext";
import { createPortal } from "react-dom";

function List({ id, children }) {
  const { openId, position } = useContext(MenusContext);
  if (openId !== id) return null;

  const { top, left } = position;

  return createPortal(
    <ul
      className="fixed flex flex-col gap-1 rounded-md border border-gray-300 bg-white px-4 py-3 text-lg font-medium"
      style={{
        top: top + 20,
        left: left - 100,
      }}
    >
      {children}
    </ul>,
    document.body,
  );
}

export { List };
