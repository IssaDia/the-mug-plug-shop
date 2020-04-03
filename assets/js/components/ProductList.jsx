import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { Link, useHistory } from "react-router-dom";
import { getProduct } from "../actions/getProduct";
import { Row, Col } from "react-bootstrap";
import { addBasket } from "../actions/addBasket";
import { toast } from "react-toastify";
import Product from "./Product";

{
  /*Component with display of all products*/
}

const Products = props => {
  
  {
    /*state to set the active page for pagination*/
  }

  const [currentPage, setcurrentPage] = useState(1);

  {
    /*number of items wanted in each page of pagination*/
  }

  const itemsPerPage = 6;

  {
    /*function to set active page for pagination*/
  }

  const handlePageChange = page => {
    setcurrentPage(page);
  };

  const start = currentPage * itemsPerPage - itemsPerPage;

  {
    /*javascript function to get products for each page of pagination*/
  }

  const paginatedProducts = props.searchedProducts.slice(start, start + itemsPerPage);


  {
    /*loop to display all products in cards with function to add to cart or go to a product page*/
  }

  const productList = paginatedProducts.map((product, index) => {
    return (
      <Product
        key={index}
        id={product.id}
        images={product.images}
        name={product.name}
        price={product.price}
      ></Product>
    );
  });



  return (
    <>
      <Row>{productList}</Row>
      <ul className="pagination">
        <Pagination
          itemsPerPage={itemsPerPage}
          length={props.searchedProducts.length}
          handlePageChange={handlePageChange}
        ></Pagination>
      </ul>
    </>
  );
};

export default Products;
