import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCart } from "../actions/quantityCart";
import { decreaseCart } from "../actions/quantityCart";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { toast } from "react-toastify";

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

  const cart = useSelector(state => state.productState);

  {
    /*  hook to use redux actions */
  }

  const dispatch = useDispatch();

  {
    /* javascript function to push all products in cart in a specific array*/
  }

  Object.keys(cart.products).forEach(function(item) {
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
            <div className="cart-quantity">
              <span
                className="number"
                onClick={() => dispatch(decreaseCart(product.id - 1))}
              >
                <FontAwesome name="fas fa-minus" />
              </span>
              <span>
                <input placeholder={product.numbers}></input>
              </span>
              <span className="number">
                <FontAwesome
                  name="fas fa-plus"
                  onClick={() => dispatch(increaseCart(product.id - 1))}
                />
              </span>
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

      <Link className="previous previous-cart" to="/products">
        &#8249; return to products
      </Link>

      {/* Breadcrum using Bootstrap */}

      <Breadcrumb>
        <Breadcrumb.Item href="/#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/#/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Cart</Breadcrumb.Item>
      </Breadcrumb>

      {/* Bootstrap table to display products in cart */}

      <div className="cart-container">
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
          </tbody>
        </table>
        <Link to="/payment" onClick={handleToast} className="btn btn-success">
          Proceed to payment
        </Link>
      </div>
    </>
  );
};

export default Cart;
