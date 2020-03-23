import React from "react";
import { Link, useHistory } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import Products from "../components/Products";

const ProductPage = () => {
  let history = useHistory();

  return (
    <>
      <Link className="previous" onClick={() => history.goBack()}>&#8249; Previous</Link>
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
