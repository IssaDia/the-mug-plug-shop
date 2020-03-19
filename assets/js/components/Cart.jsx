import React, { Fragment, useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { increaseCart } from "../actions/quantityCart";
import { decreaseCart } from "../actions/quantityCart";
import $ from 'jquery';

var FontAwesome = require("react-fontawesome");

const Cart = () => {


  useEffect(() => { 
    let classy = document.getElementById('classy');
    console.log(classy);
    
    
  }, []);
  let productsInCart = [];

  const cart = useSelector(state=>state.productState);
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
            <img src={require(`../../images/${product.images}.jpeg`)} alt="" height="50" width="50"></img>
            <span className='product-name-cart'>{product.name}</span>
          </td>
          <td>${parseFloat(product.price).toFixed(2)}</td>
          <td>
            <div className='cart-quantity'>
              <span id= 'classy'><FontAwesome
                name="fas fa-minus"
                onClick={() => dispatch(decreaseCart(product.id -1))}
              /></span>
             <span><input placeholder={product.numbers}></input></span> 
              <span>
              <FontAwesome
                name="fas fa-plus"
                onClick={() => dispatch(increaseCart(product.id -1))}
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
      <input type="submit" value="Continue to checkout" className="btn btn-success"></input>
    </Container>
  );
};

export default Cart;
