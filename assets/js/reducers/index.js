import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import productReducer from './productReducer';


 export default combineReducers({
    
    basketState : basketReducer,
    productState : productReducer
}); 
