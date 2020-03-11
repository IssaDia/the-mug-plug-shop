import {
    INCREASE_QUANTITY_CART,
    DECREASE_QUANTITY_CART
  } from './type';


  export const increaseCartSuccess = id => {
    return {
      type: INCREASE_QUANTITY_CART,
      payload: {
        id
      }
      
      
    }
  }


  export const increaseCart = id => {
    return (dispatch) => {
        console.log(id);
        dispatch(increaseCartSuccess(id));
      }
  };


  export const decreaseCartSuccess = id => {
    return {
      type: DECREASE_QUANTITY_CART,
      payload: {
        id
      }
    }
  }


  export const decreaseCart = id => {
    return (dispatch) => {
        console.log("decrease cart");
        dispatch(decreaseCartSuccess(id));
      }
  }
  
  