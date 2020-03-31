import {
  FETCH_SINGLE_PRODUCT
} from './type';

{
  /* action to get one single product based on Id */
}

export const getProduct = id => {
  return (dispatch) => {
    dispatch({
      type: FETCH_SINGLE_PRODUCT,
      payload: id
    });

  }

};

