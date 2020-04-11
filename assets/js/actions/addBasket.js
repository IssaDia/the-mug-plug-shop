import {
  ADD_BASKET
} from './type';

{
  /* action to add product to basket */
}

export const addBasket = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_BASKET,
      payload: id
    });

  }

}