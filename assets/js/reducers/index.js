import { combineReducers } from 'redux';
import products from './rootReducer';
import basketReducer from './rootReducer';


export default combineReducers({
    products: products,
    basketState : basketReducer
});