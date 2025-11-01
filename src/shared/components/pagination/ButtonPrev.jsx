import { ButtonSecondary } from "../ButtonSecondary";
import { ChevronLeft } from "lucide-react";

function ButtonPrev({ onClick }) {
  return (
    <ButtonSecondary onClick={onClick} classes="flex items-center gap-1">
      <ChevronLeft />
      Previous
    </ButtonSecondary>
  );
}

export { ButtonPrev };
