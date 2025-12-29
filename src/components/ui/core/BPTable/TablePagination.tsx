import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../../button";

const TablePagination = ({ totalPage = 10 }: { totalPage?: number }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center justify-end gap-3 p-8">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg
          text-sm font-medium transition-all
          ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }
        `}
      >
        <ArrowLeft className="w-4 h-4" />
        Previous
      </button>

      <div className="flex items-center gap-1">
        <button
          onClick={() => handlePageClick(1)}
          className={`
            min-w-[40px] h-10 px-3 rounded-lg text-sm font-medium
            transition-all
            ${
              currentPage === 1
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50"
            }
          `}
        >
          01
        </button>
      </div>

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPage}
        className={`
          flex items-center gap-2 px-5 py-2 rounded-lg
          text-sm font-medium transition-all
          ${
            currentPage === totalPage
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-800 to-pink-500 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all duration-300"
          }
        `}
      >
        Next
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default TablePagination;
