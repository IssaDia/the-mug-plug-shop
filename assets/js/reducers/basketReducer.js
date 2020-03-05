
import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  FETCH_PRODUCTS
} from '../actions/type';


const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    black: {
      name: 'black',
      price : 12.00,
      numbers:0,
      inCart: false
    },
    white: {
      name: 'white',
      price : 12.00,
      numbers:0,
      inCart: false
    },
    blue: {
      name: 'blue',
      price : 12.00,
      numbers:0,
      inCart: false
    },
    grey: {
      name: 'grey',
      price : 12.00,
      numbers:0,
      inCart: false
    },
  }
  

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

      
/*
case FETCH_PRODUCTS:

        
          let products = action.products;
          var myArray = [];
          for(var i = 0; i < products.length; i++){
            myArray.push(products[i].name)
          }

          

          let productList = JSON.stringify(myArray);
          let pro = productList.substring(2, productList.length - 80);

          console.log(pro);
          

        return  { 
          ...state,
          products: [...state.products, pro]
      };

*/

