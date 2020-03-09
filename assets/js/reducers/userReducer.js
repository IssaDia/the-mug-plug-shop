import {
    USER_SIGNUP, USER_LOGIN
} from '../actions/type';

const initialState = {
   
}

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case USER_SIGNUP:

            return state;
        case USER_LOGIN:

            return state;

        default:
            return state;
    }
}