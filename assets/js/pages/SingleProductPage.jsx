import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../actions/addBasket";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Previous from "../components/Previous";

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
      <Previous text="Previous"></Previous>
      <Breadcrumb>
        <Breadcrumb.Item href="/#">HOME</Breadcrumb.Item>
        <Breadcrumb.Item>PRODUCTS</Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>
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
                <a
                  className="cart-click"
                  onClick={() => {
                    dispatch(addBasket(props.id - 1));
                    handleToast();
                  }}
                >
                  <i className="material-icons">add_shopping_cart</i>
                </a>
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
