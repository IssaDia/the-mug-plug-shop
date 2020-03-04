import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  FETCH_PRODUCTS
} from '../actions/type';


const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  

}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      let addQuantity = {
        ...state.products[action.payload]
      }

      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      console.log(addQuantity);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
          cartCost: state.cartCost + state.products[action.payload].price,
          products : {
            ...state.products,
            [action.payload] : addQuantity
          }
      }
      case GET_NUMBERS_BASKET:
        return {
          ...state
        }
        case FETCH_PRODUCTS:
          return action.products;
        default:
          return state;
  }
};