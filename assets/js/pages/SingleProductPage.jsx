import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../actions/addBasket";
import { Link } from "react-router-dom";

{
  /*Page with single product */
}

const SingleProductPage = props => {
  {
    /*get id from product clicked in product list*/
  }

  const id = props.match.params.id;

  {
    /*hook to get actions from redux*/
  }

  const dispatch = useDispatch();

  {
    /*hook to get all poducts from store*/
  }

  let product = useSelector(state => state.productState.products[id]);

  {
    /*Display single product in card (working on CSS still)*/
  }

  return (
    <>
    <div className="category-title">
        <h2>
          <span>{product.name}</span>
        </h2>
      </div>
      <div className="wrapper single-product-container">
        <div className="container-product">
          <img
            src={require(`../../images/${product.images}.jpeg`)}
            alt=""
            width="100%"
            className="top"
          ></img>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
              </div>
              <div className="buy">
                <Link
                  className="cart-click"
                  onClick={() => {
                    dispatch(addBasket(product.id - 1));
                  }}
                >
                  <i className="material-icons">add_shopping_cart</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="contents"></div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
