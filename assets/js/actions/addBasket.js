import {
  ADD_BASKET
} from './type';

export const addBasket = (id) => {
  return (dispatch) => { 
    dispatch({
      type: ADD_BASKET,
      payload: id
    });

  }

}