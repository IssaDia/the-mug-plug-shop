import { FETCH_PRODUCTS } from '../actions/type';

const initState = []

const rootReducer = (state=initState, action) =>{
     switch (action.type) {
      case FETCH_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default rootReducer;