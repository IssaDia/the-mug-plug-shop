import React, { useState } from "react";
import { connect } from "react-redux";
import { addBasket } from "../actions/addBasket";

const ProductPage = ({ productProps, addBasket }) => {
  let products = productProps.products;

  const [currentPage, setcurrentPage] = useState(1);

  const itemsPerPage = 6;
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const handlePageChange = page => {
    setcurrentPage(page);
  };

  const start = currentPage * itemsPerPage - itemsPerPage;

  const paginatedProducts = products.slice(start, start + itemsPerPage);

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

  console.log(pages);

  const productList = paginatedProducts.map(product => {
    return (
      <div key={product.id} className="image card">
        <img
          src={require(`../../images/${product.images}.jpeg`)}
          alt=""
          height="300"
          width="300"
        ></img>
        <h3>{product.name}</h3>
        <h3>{product.price} $</h3>
        <a onClick={() => addBasket(product.id - 1)} className="addToCart cart">
          Add to cart
        </a>
      </div>
    );
  });
  return (
    <>
      <div className="container">{productList}</div>
      <div className="pagination-block">
        <ul className="pagination">{pagination}</ul>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addBasket: id => {
      dispatch(addBasket(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    productProps: state.productState
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
