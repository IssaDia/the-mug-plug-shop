import {
  FETCH_SINGLE_PRODUCT
} from './type';

export const getProduct = id => {
  return (dispatch) => {
    dispatch({
      type: FETCH_SINGLE_PRODUCT,
      payload: id
    });

  }

};

