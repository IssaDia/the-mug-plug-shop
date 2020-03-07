import React, { Fragment } from 'react'
import { connect } from 'react-redux';


const Cart = ({productProps}) => {

  console.log(productProps);

  let productsInCart = [];

  Object.keys(productProps.products).forEach( function(item) {
    if(productProps.products[item].inCart) {
      productsInCart.push(productProps.products[item])
    }

  
  })

  productsInCart = productsInCart.map((product, index) => {
      return <Fragment key={index}>
        <div>
          {product.name}
          {product.price},00
          {product.numbers}
          {product.numbers * product.price},00
        </div>
      </Fragment>
  })
  
  return (
    <div>
      {productsInCart}
    </div>
  );
}


const mapStateToProps = state => ({
  
  productProps: state.productState
})

export default connect(mapStateToProps)(Cart);
