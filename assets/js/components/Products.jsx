import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getProduct } from "../actions/getProduct";
import { Container, Row, Col } from "react-bootstrap";
import { addBasket } from "../actions/addBasket";

const Products = () => {
 
  const products = useSelector(state => state.productState.products);
  const dispatch = useDispatch();

  const [currentPage, setcurrentPage] = useState(1);

  const itemsPerPage = 6;

  const handlePageChange = page => {
    setcurrentPage(page);
  };

  const start = currentPage * itemsPerPage - itemsPerPage;

  const paginatedProducts = products.slice(start, start + itemsPerPage);

  const productList = paginatedProducts.map(product => {
    return (
     
        <Col>
      <div className="wrapper" key={product.id}>
        <div className="container-product">
          <img
            src={require(`../../images/${product.images}.jpeg`)}
            alt=""
            width="100%"
            className="top"
          ></img>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
              </div>
              <div className="buy">
                <Link
                  className="cart-click"
                  onClick={() => {
                    dispatch(addBasket(product.id - 1));
                  }}
                >
                  <i className="material-icons">add_shopping_cart</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="icon">
            <Link
              to={`/products/${product.id}`}
              onClick={() => dispatch(getProduct(product.id))}
            >
              <i className="material-icons">info_outline</i>
            </Link>
          </div>
          <div className="contents"></div>
        </div>
      </div>
      </Col>
     
    );
  });



  return (
    <>
      <Container>
      <Row>
        {productList}
        </Row>
        </Container>
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
