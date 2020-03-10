import {
    USER_SIGNUP, USER_LOGIN
} from '../actions/type';



export default function userReducer(state = [], action) {
    switch (action.type) {

        case USER_SIGNUP:

        console.log(state);
        
        console.log('success');
        
            return [...state, action.payload];
        case USER_LOGIN:

            return state;

        default:
            return state;
    }
}