import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-center mt-6">
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 mx-1 bg-brown-500 text-white rounded-lg"
        >
          Prev
        </button>
      )}
      
      <span className="px-4 py-2 mx-1 bg-gray-300 text-black rounded-lg">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 mx-1 bg-brown-500 text-white rounded-lg"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
