import {
  INCREASE_QUANTITY_CART,
  DECREASE_QUANTITY_CART
} from './type';

{
  /* action to change number of items on cart for one product */
}

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