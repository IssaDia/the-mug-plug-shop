import {
    USER_SIGNUP,
    USER_LOGIN
} from '../actions/type';

{
    /*do something when form actions are pulled */
  }



export default function userReducer(state = [], action) {
    switch (action.type) {

        case USER_SIGNUP:

            return [...state, action.payload];
        case USER_LOGIN:

            return state;

        default:
            return state;
    }
}