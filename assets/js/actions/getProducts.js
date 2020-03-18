import { FETCH_PRODUCTS } from './type';
import axios from 'axios';

export const getProductsFromApi = (products) => {
    return {
      type: FETCH_PRODUCTS,
      products
    }
  };

export const getProducts = () => {
  return (dispatch) => {
      axios 
      .get("http://127.0.0.1:8000/api/products",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
      .then(response => {
        dispatch(getProductsFromApi(response.data))
      })
      .catch(error => {
        throw(error);
      });
    
    }
    
}

