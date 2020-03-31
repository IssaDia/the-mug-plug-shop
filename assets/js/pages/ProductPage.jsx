import React from "react";
import { Link, useHistory } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Products from "../components/Products";

{
  /*Page with Product List Component*/
}

const ProductPage = () => {
  {
    /*to get previous page*/
  }

  let history = useHistory();

  return (
    <>
      <Link to="" className="previous" onClick={() => history.goBack()}>
        &#8249; Previous
      </Link>
     
        <Breadcrumb>
          <Breadcrumb.Item href="/#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Products</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Nos Mugs</h2>
        <Products></Products>
     
    </>
  );
};

export default ProductPage;
