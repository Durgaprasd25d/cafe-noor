
import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-yellow-500 text-white rounded-lg"}`}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? "bg-yellow-600 text-white" : "bg-gray-300 text-black"} rounded-lg`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-1 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "bg-yellow-500 text-white rounded-lg"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
