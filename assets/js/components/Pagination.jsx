import React, {useState} from "react";

const Pagination = ({itemsPerPage, length, handleChangePage, currentPage}) => {
    
    const pagesCount = Math.ceil(length / itemsPerPage);
    const pages = [];
    

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
      }


  return (
    <div>
            <ul className="pagination pagination-sm">
              <li className={"page-item" + (currentPage === 1 && "disabled")}>
                <button className="page-link" onClick={() => handleChangePage(currentPage-1)}>
                  &laquo;
                </button>
              </li>
              {pages.map(page => (
                <li
                  key={page}
                  className={"page-item" + (currentPage === page && "active")}
                >
                  <button
                    className="page-link"
                    href="#"
                    onClick={() => handleChangePage(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
              <li className={"page-item" + (currentPage === pagesCount && "disabled")}>
              <button className="page-link" onClick={() => handleChangePage(currentPage+1)}>
                  &raquo;
                </button>
              </li>
            </ul>
          </div>
  );
};

Pagination.getData = (items, currentPage, itemsPerPage) =>{
    const start = currentPage*itemsPerPage-itemsPerPage;
        return items.slice(start, start + itemsPerPage);
}

export default Pagination;
