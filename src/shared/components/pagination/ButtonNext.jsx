import { ButtonSecondary } from "../ButtonSecondary";
import { ChevronRight } from "lucide-react";

function ButtonNext({ onClick }) {
  return (
    <ButtonSecondary onClick={onClick} classes="flex items-center gap-1">
      Next
      <ChevronRight />
    </ButtonSecondary>
  );
}

export { ButtonNext };
