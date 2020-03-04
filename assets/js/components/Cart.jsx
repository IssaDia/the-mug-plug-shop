
import React, { Fragment } from 'react'
import { connect } from 'react-redux';


const Cart = ({basketProps}) => {

  console.log(basketProps.products);

  let productsInCart = [];

  Object.keys(basketProps.products).forEach( function(item) {
    if(basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item])
    }

    console.log(productsInCart);
  
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
  
  basketProps: state.basketState
})

export default connect(mapStateToProps)(Cart);
