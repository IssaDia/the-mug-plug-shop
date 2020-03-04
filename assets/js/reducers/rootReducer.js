import { FETCH_PRODUCTS, ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/type';

const initialState = {
    basketNumbers : 0
}

const rootReducer = (state=initialState, action) =>{
     switch (action.type) {
      case FETCH_PRODUCTS:
      return action.products;
      case ADD_PRODUCT_BASKET:
      return {
        basketNumbers : (state.basketNumbers + 1)
      }
      case GET_NUMBERS_BASKET:
        return {
          ...state
        }
    default:
      return state;
  }
};

export default rootReducer;