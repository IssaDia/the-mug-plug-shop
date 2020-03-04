import { FETCH_PRODUCTS } from './type';
import axios from 'axios'

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
