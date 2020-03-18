import React, { Fragment } from "react";
import { connect, useSelector } from "react-redux";
import pic1 from "../../images/pic1.jpg";
import { Container } from "react-bootstrap";
import { increaseCart } from "../actions/quantityCart";
import { decreaseCart } from "../actions/quantityCart";
import { bindActionCreators } from "redux";
var FontAwesome = require("react-fontawesome");

const Cart = () => {
  let productsInCart = [];

  const products = useSelector(state=>state.productState.products);





  Object.keys(products).forEach(function(item) {
    if (products[item].inCart) {
      productsInCart.push(products[item]);
    }
  });

  console.log(productsInCart);

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
              <span><FontAwesome
                name="fas fa-minus"
                onClick={() => decreaseCart(product.id)}
              /></span>
             <span><input placeholder={product.numbers}></input></span> 
              <span>
              <FontAwesome
                name="fas fa-plus"
                onClick={() => increaseCart(product.id)}
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
            <td>${parseFloat(products.cartCost).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="Continue to checkout" className="btn btn-success"></input>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    productProps: state.productState
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increaseCart,
      decreaseCart
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
