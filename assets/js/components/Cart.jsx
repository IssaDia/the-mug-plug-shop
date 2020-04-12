import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCart } from "../actions/quantityCart";
import { decreaseCart } from "../actions/quantityCart";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { toast } from "react-toastify";
import Previous from "../components/Previous";
import { Row, Col } from "react-bootstrap";

var FontAwesome = require("react-fontawesome");

const Cart = () => {
  {
    /* Empty array where products in cart are pushed in */
  }
  let productsInCart = [];

  {
    /* flash message when trying to do a payment*/
  }

  const handleToast = () => {
    toast.error("Ce site étant une démo, vous ne pouvez pas effectuer d'achat");
  };

  {
    /* hook to get all products from store*/
  }

  const cart = useSelector((state) => state.productState);

  {
    /*  hook to use redux actions */
  }

  const dispatch = useDispatch();

  {
    /* javascript function to push all products in cart in a specific array*/
  }

  Object.keys(cart.products).forEach(function (item) {
    if (cart.products[item].inCart) {
      productsInCart.push(cart.products[item]);
    }
  });

  {
    /* loop to display visual of products in cart into my Cart table */
  }

  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment key={index}>
        <tr>
          <td>
            <img
              src={require(`../../images/${product.images}.jpeg`)}
              alt=""
              height="50"
              width="50"
            ></img>
            <span className="product-name-cart">{product.name}</span>
          </td>
          <td>${parseFloat(product.price).toFixed(2)}</td>
          <td>
            <div className="cart-unity">
              <a
                className="cart-click"
                onClick={() => dispatch(decreaseCart(product.id - 1))}
              >
                <FontAwesome name="fas fa-minus" />
              </a>
              <div className="cart-quantity">
                <span>
                  <input placeholder={product.numbers}></input>
                </span>
              </div>

              <a
                className="cart-click"
                onClick={() => dispatch(increaseCart(product.id - 1))}
              >
                <FontAwesome name="fas fa-plus" />
              </a>
            </div>
          </td>
          <td>${parseFloat(product.numbers * product.price).toFixed(2)}</td>
        </tr>
      </Fragment>
    );
  });

  return (
    <>
      {/* link to go back to products page*/}

      <Previous text="Previous"></Previous>

      {/* Breadcrum using Bootstrap */}

      <Breadcrumb>
        <Breadcrumb.Item href="/#">HOME</Breadcrumb.Item>
        <Breadcrumb.Item href="/#/products">PRODUCTS</Breadcrumb.Item>
        <Breadcrumb.Item active>CART</Breadcrumb.Item>
      </Breadcrumb>
      <div className="category-title">
        <h2>
          <span>Cart</span>
        </h2>
      </div>

      {/* Bootstrap table to display products in cart */}

      <Col className="content-container">
        {productsInCart.length > 0 ? (
          <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {productsInCart}
                <tr>
                  <td></td>
                  <td></td>
                  <td>Total Cart</td>
                  <td>${parseFloat(cart.cartCost).toFixed(2)}</td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td> </td>
                  <Link
                    to="/payment"
                    onClick={handleToast}
                    className="btn btn-success button-proceed"
                  >
                    Proceed to payment
                  </Link>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <h4>No products in Cart</h4>
        )}
      </Col>
    </>
  );
};

export default Cart;
