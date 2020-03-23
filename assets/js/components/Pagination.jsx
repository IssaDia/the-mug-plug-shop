import React from "react";

const Pagination = ({itemsPerPage, length, handlePageChange, currentPage}) => {
    
    const pagesCount = Math.ceil(length / itemsPerPage);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

      const pagination = pages.map(page => {
        return (
          <li
            key={page}
            className={"page-item" + (currentPage === page && "active")}
          >
            <button className="page-link" onClick={() => handlePageChange(page)}>
              {page}
            </button>
          </li>
        );
      });
      
  return (
    <>
    {pagination}
    </>
  );
};

export default Pagination;
