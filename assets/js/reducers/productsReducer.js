import { FETCH_PRODUCTS } from '../actions/type';

const initialState = [
    
]
export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
        return action.products;
      default:
        return state;
    }
  }