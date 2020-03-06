import {

    FETCH_PRODUCTS, ADD_BASKET
} from '../actions/type';

const initialState = {
    upBasket: 0,
    products : []
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            let myArray = [];

                for(let i = 0 ; i < action.products.length; i++){
                myArray.push(action.products[i]);
                }
            console.log(myArray);
            
            return { 
                ...state,
                products:myArray
            }
            case ADD_BASKET:
                console.log('Hello');
                
            return state;
        default:
            return state;
    }
}