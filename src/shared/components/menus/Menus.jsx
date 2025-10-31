import { useState } from "react";
import { MenusContext } from "./MenusContext";

import { Menu } from "./Menu";
import { Toggle } from "./Toggle";
import { List } from "./List";
import { Button } from "./Button";

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export { Menus };
