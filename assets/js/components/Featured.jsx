import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Featured = () => {
  let products = useSelector(state => state.productState.products);

  let filter = products.filter(product => product.price < 20);

  let featuredProducts = filter.map(featuredProduct => {
    return (
     
        <div key={featuredProduct.id} className="image card">
          <img
            src={require(`../../images/${featuredProduct.images}.jpeg`)}
            alt=""
            height="100"
            width="100"
          ></img>
          <div className="product-text">
            <p>
              <strong>{featuredProduct.name}</strong>
            </p>
          </div>
          <span className="featured-price">{featuredProduct.price} $</span>
        </div>
     
    );
  });

  return (
    <div className="featured-container">
      <h2>Featured Products</h2>
      <p className="featured-promo">Mugs for Sale</p>
      <div className="container featured-products-container">{featuredProducts}</div>
      <Link to="/products">
        <p>Come to see all our mugs</p>
      </Link>
    </div>
  );
};

export default Featured;
