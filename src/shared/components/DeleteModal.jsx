import { Button } from "./Button";
import { ButtonSecondary } from "./ButtonSecondary";
import { Modal } from "./modal/Modal";

function DeleteModal({ onConfirm, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h1 className="mt-4 w-[400px] text-center text-2xl font-medium">
        Are you sure you want to delete the product?
      </h1>
      <div className="mt-6 flex justify-end gap-4">
        <ButtonSecondary onClick={onClose}>Cancel</ButtonSecondary>
        <Button onClick={onConfirm}>Confirm</Button>
      </div>
    </Modal>
  );
}

export { DeleteModal };
