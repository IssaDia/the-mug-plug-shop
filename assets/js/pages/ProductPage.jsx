import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../actions/addBasket";
import { getProduct } from "../actions/getProduct";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getProducts } from "../actions/getProducts";


const ProductPage = () => {

  useEffect(() => {
  dispatch(getProducts())
  }, [])

  const products = useSelector(state=>state.productState.products);
  const dispatch = useDispatch();
  
  

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


  const productList = paginatedProducts.map(product => {
    return (
      <div key={product.id} className="image card">
        <img
          src={require(`../../images/${product.images}.jpeg`)}
          alt=""
          height="300"
          width="300"
        ></img>
        <div className='product-text'>
          <p><strong>{product.name}</strong></p>
          <p>{product.price} $</p>
          <Link to={`/products/${product.id}`}className='btn btn-success' onClick={() => dispatch(getProduct(product.id))}>Détail</Link>
        </div>
        <a onClick={() => dispatch(addBasket(product.id-1))} className="addToCart cart">
          Add to cart
        </a>
      </div>
    );
  });
  return (
    <>
    <h2>Nos Mugs</h2>
      <Container className="products-container">{productList}</Container>
      <div className="pagination-block">
        <ul className="pagination">{pagination}</ul>
      </div>
    </>
  );
};


export default ProductPage;
