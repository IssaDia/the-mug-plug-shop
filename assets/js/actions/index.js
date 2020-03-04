import { FETCH_PRODUCTS } from './type';
import { ADD_PRODUCT_BASKET } from './type';
import { GET_NUMBERS_BASKET } from './type';


import axios from 'axios';

export const fetchProducts = (products) => {
    return {
      type: FETCH_PRODUCTS,
      products
    }
  };
  
  export const fetchAllProducts = () => {
    return (dispatch) => {
      return axios.get(`http://127.0.0.1:8000/api/products`)
      .then(response => response.data["hydra:member"])
        .then(data => {
          dispatch(fetchProducts(data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const addBasketSuccess = () => {
    return {
      type: ADD_PRODUCT_BASKET,
    
      
    }
  };

  export const addBasket = () => {
    return (dispatch) => {
      console.log("Adding to basket");
      dispatch(addBasketSuccess())
    }
  }

  export const getNumbers = () => {
    return (dispatch) => {
        console.log("Getting all basket");
        dispatch({
            type : GET_NUMBERS_BASKET  
        });
      }
}