import { combineReducers } from 'redux';
import products from './rootReducer';

export default combineReducers({
    products: products
});