import { ADD_PRODUCT_BASKET } from './type';

export const addBasket = (id) => {
    return (dispatch) => {
      console.log("Adding to basket");
      console.log(id);
      
      dispatch({
        type: ADD_PRODUCT_BASKET, 
        payload : id
      });
     
    }
    
  }