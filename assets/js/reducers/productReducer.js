import {
    FETCH_PRODUCTS,
    FETCH_SINGLE_PRODUCT,
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

        case FETCH_SINGLE_PRODUCT:
            return state;

        case ADD_BASKET:
            let addQuantity = state.products[action.payload];
            console.log(addQuantity);
            
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
            
            let increase = state.products[action.payload];
            increase.numbers +=1;
            console.log(increase);
            

            return {
                ...state,
                cartCost: state.cartCost + state.products[action.payload].price
            };
        case DECREASE_QUANTITY_CART:

            let decrease = state.products[action.payload];
            decrease.numbers -= 1;

            return {
                ...state,
                cartCost: state.cartCost - state.products[action.payload].price
            };

        default:
            return state;
    }
}