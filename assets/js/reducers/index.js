import { combineReducers } from 'redux';
import productReducer from './productReducer';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';


 export default combineReducers({

    productState : productReducer,
    form : formReducer,
    userState: userReducer
}); 
