import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { increaseCart } from "../actions/quantityCart";
import { decreaseCart } from "../actions/quantityCart";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

var FontAwesome = require("react-fontawesome");

const Cart = () => {

  let productsInCart = [];

  const handleToast = () => {
    toast.error('Ce site étant une démo, vous ne pouvez pas effectuer d\'achat')
  }

  const cart = useSelector(state => state.productState);
  const dispatch = useDispatch();

  Object.keys(cart.products).forEach(function(item) {
    if (cart.products[item].inCart) {
      productsInCart.push(cart.products[item]);
    }
  });

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
    <Container>
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
    </Container>
  );
};

export default Cart;
