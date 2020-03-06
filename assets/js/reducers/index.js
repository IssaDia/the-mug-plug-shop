import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import products from './productReducer';


 export default combineReducers({
    
    basketState : basketReducer,
    products : products
}); 
