import React from "react";
import { useSelector } from "react-redux";

const SingleProductPage = props => {

  const id= props.match.params.id;
  
  let product = useSelector(
    state => state.productState.products[id]
  );

  console.log(product.images);
  
  

  return (
    <>
    <h1>{product.name}</h1>;
    <img
            src={require(`../../images/${product.images}.jpeg`)}
            alt=""
            height="300"
            width="300"
          ></img>
    </>
  )

};

export default SingleProductPage;
