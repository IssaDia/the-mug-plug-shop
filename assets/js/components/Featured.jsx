import React from "react"
import { useSelector } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

{
  /* Widget to show products for sale*/
}

const Featured = () => {
  {
    /*hook to get all products from store*/
  }

  let products = useSelector(state => state.productState.products);

  {
    /*javascript function to get product with price below 20$ */
  }

  let filter = products.filter(product => product.price < 22);
  

  {
    /*loop to display filtered products in cards*/
  }

  let featuredProducts = filter.map(featuredProduct => {
    return (
      <div className="wrapper-featured" key={featuredProduct.id}>
        <img
          src={require(`../../images/${featuredProduct.images}.jpeg`)}
          alt=""
          height="100"
          width="100"
          className="top"
        ></img>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>{featuredProduct.name}</h1>
              <span className="featured-price">{featuredProduct.price} $</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="featured-container">
      <div className='category-title'>
        <h2><span>Featured Products</span></h2>
        </div>
      <p className="featured-promo">Mugs for Sale</p>
      <Container>
        <Row>{featuredProducts}</Row>
      </Container>
      <Link to="/products">
        <p className="featured-link">Come to see all our mugs</p>
      </Link>
    </div>
  );
};


export default Featured;
