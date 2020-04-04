import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ProductList from "../components/ProductList";
import { useState } from "react";
import Previous from "../components/Previous";
import SearchBox from "../components/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

{
  /*Page with Product List Component*/
}

const ProductPage = () => {
  {
    /*hook to get all the products from store*/
  }

  const products = useSelector(state => state.productState.products);

  {
    /*get value from select*/
  }

  const [value, setValue] = useState("increasing");

  const [search, setsearch] = useState("");

  let handleChange = event => {
    setValue(event.target.value);
  };

  {
    /* handle input value*/
  }

  const handleInput = e => {
    setsearch(e.target.value);
  };

  {
    /* filter products searched*/
  }

  let searchedProducts = products.filter(searchedProduct => {
    return searchedProduct.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Previous text="Previous"></Previous>
      <Breadcrumb>
        <Breadcrumb.Item href="/#">HOME</Breadcrumb.Item>
        <Breadcrumb.Item active>PRODUCTS</Breadcrumb.Item>
      </Breadcrumb>
      <div className="category-title">
        <h2>
          <span>Mugs</span>
        </h2>
      </div>
      <Row className='content-container'>
        <Col className="sort">
          <p>Sort </p>
          <label>
            <select onChange={handleChange}>
              <option defaultValue value="increasing">
                Increasing price
              </option>
              <option value="decreasing">Decreasing price</option>
            </select>
          </label>
        </Col>
        <Col className="search">
          <p>search by name </p>
          <SearchBox handleInput={handleInput}></SearchBox>
        </Col>
      </Row>

      {searchedProducts.length == 0 ? 
      
      <h4>No matches found</h4>
  
    :
    <ProductList
      selectedValue={value}
      searchedProducts={searchedProducts}
    ></ProductList>
      }
      
    </>
  );
};

export default ProductPage;
