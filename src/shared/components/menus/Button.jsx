import { useContext } from "react";
import { MenusContext } from "./MenusContext";

function Button({ children, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    close();
    onClick();
  }

  return (
    <li onClick={handleClick} className="cursor-pointer">
      {children}
    </li>
  );
}

export { Button };
