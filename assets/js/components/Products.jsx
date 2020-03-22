import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { addBasket } from "../actions/addBasket";
import { getProduct } from "../actions/getProduct";

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
      <div key={product.id} className="image card">
        <img
          src={require(`../../images/${product.images}.jpeg`)}
          alt=""
          height="300"
          width="300"
        ></img>
        <div className="product-text">
          <p>
            <strong>{product.name}</strong>
          </p>
          <span className="product-price">{product.price} $</span>
          <Link
            to={`/products/${product.id}`}
            className="btn btn-dark btn-detail"
            onClick={() => dispatch(getProduct(product.id))}
          >
            Détail
          </Link>
        </div>
        <a
          onClick={() => dispatch(addBasket(product.id - 1))}
          className="addToCart cart"
        >
          Add to cart
        </a>
      </div>
    );
  });

  return (
    <>
      <Container className="products-container">{productList}</Container>

      <div className="pagination-block">
        <ul className="pagination">
          <Pagination
            itemsPerPage={itemsPerPage}
            length={products.length}
            handlePageChange={handlePageChange}
          ></Pagination>
        </ul>
      </div>
    </>
  );
};

export default Products;
