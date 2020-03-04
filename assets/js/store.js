import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchAllProducts } from './actions/index';

const inititialState = {};
const middleware = [thunk];

const store = createStore(rootReducer,
    inititialState,
     composeWithDevTools(applyMiddleware(...middleware))
);
store.dispatch(fetchAllProducts());

export default store;


