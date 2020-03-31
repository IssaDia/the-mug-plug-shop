import React from "react";

{
  /*Widget to paginate all products to multiple pages*/
}

const Pagination = ({
  itemsPerPage,
  length,
  handlePageChange,
  currentPage
}) => {
  {
    /*get number of pages with numbers of items submitted*/
  }

  const pagesCount = Math.ceil(length / itemsPerPage);

  {
    /* empty array to push different pages needed*/
  }

  const pages = [];

  {
    /*loop to push each pages needed in an array*/
  }

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

      {/*loop to display all pages in a pagination Widget*/}


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

  return <>{pagination}</>;
};

export default Pagination;
