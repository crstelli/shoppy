import { createPortal } from "react-dom";

import { Overlay } from "./Overlay";
import { X } from "lucide-react";

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <div className="rounded-md bg-gray-100 p-4">
        <X onClick={onClose} className="ml-auto cursor-pointer" size={35} />
        {children}
      </div>
    </Overlay>,
    document.body,
  );
}

export { Modal };
