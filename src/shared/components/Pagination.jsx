import { ButtonSecondary } from "./ButtonSecondary";
import { usePagination } from "../hooks/usePagination";
import { PAGE_SIZE } from "../constansts";

import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ count }) {
  const { getPage, setPage } = usePagination();

  const currentPage = getPage();
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    setPage(next);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    setPage(prev);
  }

  return (
    <div className="flex items-center justify-between">
      <p>
        Showing{" "}
        <span className="font-bold">
          {(currentPage - 1) * PAGE_SIZE + 1} to{" "}
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        results out of <span className="font-bold">{count}</span>.
      </p>
      <div className="flex gap-2">
        <ButtonSecondary onClick={prevPage} classes="flex items-center gap-1">
          <ChevronLeft className="-translate-y-[1.5px]" />
          Previous
        </ButtonSecondary>
        <ButtonSecondary onClick={nextPage} classes="flex items-center gap-1">
          Next
          <ChevronRight className="-translate-y-[1.5px]" />
        </ButtonSecondary>
      </div>
    </div>
  );
}

export { Pagination };
