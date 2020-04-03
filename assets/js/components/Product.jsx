import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../actions/addBasket";
import { toast } from "react-toastify";
import { getProduct } from "../actions/getProduct";


const Product = props => {

    {
        /*hook to get redux actions*/
      }
    
      const dispatch = useDispatch();
    
    
      {
        /* flash message when trying to do a payment*/
      }
    
      const handleToast = () => {
        toast.success(<div>Added to cart &#10003;</div>);
      };
    return ( 

        <Col>
        <div className="wrapper">
          <div className="container-product">
            <img
              src={require(`../../images/${props.images}.jpeg`)}
              alt=""
              width="100%"
              className="top"
            ></img>
            <div className="bottom">
              <div className="left">
                <div className="details">
                  <h1>{props.name}</h1>
                  <p>${props.price}</p>
                </div>
                <div className="buy">
                  <Link
                    className="cart-click"
                    onClick={() => {
                      dispatch(addBasket(props.id - 1));handleToast()
                    }}
                  >
                    <i className="material-icons">add_shopping_cart</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <Link
                to={`/products/${props.id}`}
                onClick={() => dispatch(getProduct(props.id))}
              >
                <i className="material-icons">info_outline</i>
              </Link>
            </div>
            <div className="contents"></div>
          </div>
        </div>
      </Col>
     );
}
 
export default Product;