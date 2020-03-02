import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const { products } = this.props;
    const productData = products.length ? (
      products.map(product => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        )
      })
    ) : (
      <p>0 produits</p>
    );
    return (
      <div>
        { productData}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Cart);
