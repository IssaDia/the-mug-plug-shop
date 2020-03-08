import React, { Fragment } from "react";
import { connect } from "react-redux";
import pic1 from "../../images/pic1.jpg";
import { Container } from "react-bootstrap";

const Cart = ({ productProps }) => {
  
  let productsInCart = [];

  Object.keys(productProps.products).forEach(function(item) {
    if (productProps.products[item].inCart) {
      productsInCart.push(productProps.products[item]);
    }
  });

  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment key={index}>
        <tr>
          <td>
            <img src={pic1} alt="" height="50" width="50"></img>
            <span>{product.name}</span>
          </td>
          <td>${parseFloat(product.price).toFixed(2)}</td>
          <td>
          <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            {product.numbers}</td>
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
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
            <td>${parseFloat(productProps.cartCost).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

const mapStateToProps = state => ({
  productProps: state.productState
});

export default connect(mapStateToProps)(Cart);
