import {
    FETCH_PRODUCTS,
    ADD_BASKET,
    GET_NUMBERS_BASKET,
    INCREASE_QUANTITY_CART,
    DECREASE_QUANTITY_CART
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
            addQuantity.inCart = true;
            addQuantity.numbers += 1;

            return {
                ...state,
                upBasket: state.upBasket + 1,
                    cartCost: state.cartCost + state.products[action.payload].price,

            };
        case GET_NUMBERS_BASKET:
            return {
                ...state
            };
        case INCREASE_QUANTITY_CART:
            let increaseProductNumber = state.products[action.payload];
            increaseProductNumber.numbers += 1;
           
            console.log(state.products);

            return [...state, action.payload];
        case DECREASE_QUANTITY_CART:
            let decreaseProductNumber = state.products[action.payload];
            decreaseProductNumber.numbers -= 1;
            console.log('down');

            return {
                ...state
            };


        default:
            return state;
    }
}