import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getProduct } from "../actions/getProduct";
import { Row, Col } from "react-bootstrap";
import { addBasket } from "../actions/addBasket";

{
  /*Component with display of all products*/
}

const Products = () => {
  {
    /*hook to get all the products from store*/
  }

  const products = useSelector(state => state.productState.products);

  {
    /*hook to get redux actions*/
  }

  const dispatch = useDispatch();

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

      {/*javascript function to get products for each page of pagination*/}


  const paginatedProducts = products.slice(start, start + itemsPerPage);

      {/*loop to display all products in cards with function to add to cart or go to a product page*/}


  const productList = paginatedProducts.map(product => {
    return (
      <Col key={product.id}>
        <div className="wrapper">
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
