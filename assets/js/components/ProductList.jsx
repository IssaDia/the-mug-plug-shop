import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
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
    /*hook to get all the products from store*/
  }

  const products = useSelector(state => state.productState.products);


useEffect(
  
  
  let data = null;
  switch(props.selectedValue) {
    
      case 'decreasing':
      return data.sort((a, b) => b.price - a.price);
    default:
      return data.sort((a, b) => a.price - b.price);;
  }
  
  , [])


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

  const paginatedProducts = products.slice(start, start + itemsPerPage);



  {
    /*loop to display all products in cards with function to add to cart or go to a product page*/
  }


  const renderSwitch = () =>   {
    
  }


  const productList = data.map((product,index) => {
    return (
      <Product key ={index} name={product.name} images={product.images} price = {product.price} id={product.id} ></Product>
    );
  });


  return (
    <>
   
      <Row>{productList}</Row>
      <ul className="pagination">
        <Pagination
          itemsPerPage={itemsPerPage}
          length={products.length}
          handlePageChange={handlePageChange}
        ></Pagination>
      </ul>
    </>
  );
};

export default Products;
