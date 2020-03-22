import {
  INCREASE_QUANTITY_CART,
  DECREASE_QUANTITY_CART
} from './type';

export const increaseCart = id => {
  return (dispatch) => { 
    dispatch({
      type: INCREASE_QUANTITY_CART,
      payload: id
    });

  }
};

export const decreaseCart = id => {
  return (dispatch) => { 
    dispatch({
      type: DECREASE_QUANTITY_CART,
      payload: id
    });

  }
}