import React from "react"
import { useSelector } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { addBasket } from "../actions/addBasket"
import { toast } from "react-toastify"
import { getProduct } from "../actions/getProduct"
import { useDispatch } from "react-redux"


{
  /* Widget to show products for sale*/
}

const Featured = () => {

  {
    /*hook to get redux actions*/
  }

  const dispatch = useDispatch();

  {
    /* flash message when trying to do a payment*/
  }

  const handleToast = () => {
    toast.success(<div>Added to cart &#10003;</div>);
  };
  {
    /*hook to get all products from store*/
  }

  let products = useSelector(state => state.productState.products);

  {
    /*javascript function to get product with price below 20$ */
  }

  let filter = products.filter(product => product.price < 21);
  

  {
    /*loop to display filtered products in cards*/
  }

  let featuredProducts = filter.map(featuredProduct => {
    return (
      <Col>
      <div className="wrapper">
        <div className="container-product">
          <img
            src={require(`../../images/${featuredProduct.images}.jpeg`)}
            alt=""
            width="100%"
            className="top"
          ></img>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h1>{featuredProduct.name}</h1>
                <p>${featuredProduct.price}</p>
              </div>
              <div className="buy">
                <a
                  className="cart-click"
                  onClick={() => {
                    dispatch(addBasket(props.id - 1));
                    handleToast();
                  }}
                >
                  <i className="material-icons">add_shopping_cart</i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="icon">
            <Link
              to={`/products/${featuredProduct.id}`}
              onClick={() => dispatch(getProduct(props.id))}
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
