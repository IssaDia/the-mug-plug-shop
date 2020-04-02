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

        {
            /* empty array to store all products*/
        }
        let myArray = [];

        {
            /* loop to store all products in array*/
        }
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

    {
        /* put product in cart and add quantity when addBasket action is pulled */
    }
    let product = state.products[action.payload];
    product.inCart = true;
    product.numbers += 1;

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

    {
        /*increase quantity of product in cart when quantity cart action is pulled */
    }

    let increase = state.products[action.payload];
    increase.numbers += 1;

    return {
        ...state,
        upBasket: state.upBasket + 1,
        cartCost: state.cartCost + state.products[action.payload].price
    };
    case DECREASE_QUANTITY_CART:

        {
            /*decrease quantity of product in cart when quantity cart action is pulled */
          }

        let decrease = state.products[action.payload];
        decrease.numbers -= 1;

        return {
            ...state,
            upBasket: state.upBasket - 1,
            cartCost: state.cartCost - state.products[action.payload].price
        };

    default:
        return state;
    }
}