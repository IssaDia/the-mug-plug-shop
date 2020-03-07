import {
    FETCH_PRODUCTS,
    ADD_BASKET,
    GET_NUMBERS_BASKET
} from '../actions/type';

const initialState = {
    upBasket: 0,
    cartCost: 0,
    products: []
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            let myArray = [];

            for (let i = 0; i < action.products.length; i++) {
                myArray.push(action.products[i]);
            };

            return {
                ...state,
                products: myArray
            };
        case ADD_BASKET:
            let addQuantity = state.products[action.payload];
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            console.log(state.cartCost);
            
            return {
                ...state,
                upBasket: state.upBasket + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                
                
            };
        case GET_NUMBERS_BASKET:
            return {
                ...state
            };
        default:
            return state;
    }
}




































