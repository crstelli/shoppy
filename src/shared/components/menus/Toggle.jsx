import { useContext } from "react";
import { MenusContext } from "./MenusContext";

import { EllipsisVertical } from "lucide-react";

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    const { top, left } = e.target.closest("button").getBoundingClientRect();
    setPosition({ top, left });

    openId === id ? close() : open(id);
  }

  return (
    <button onClick={handleClick} className="cursor-pointer">
      <EllipsisVertical />
    </button>
  );
}

export { Toggle };
