import { ADD_BASKET } from './type';

export const addBasket = (id) => {
    return (dispatch) => {
      console.log("Adding to basket");
      console.log(id);

      dispatch({type: ADD_BASKET,
        payload : id});
     
    }
    
  }