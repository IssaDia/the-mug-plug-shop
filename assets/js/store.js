import {
     createStore,
     applyMiddleware
} from "redux";
import {
     composeWithDevTools
} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {
     getProducts
} from './actions/getProducts';


{
     /*Store setup with combined reducers tools for Chrome */
}

const middleware = [thunk];

const store = createStore(rootReducer,

     composeWithDevTools(applyMiddleware(...middleware))
);


{
     /*Get all products from database at start*/
}

store.dispatch(getProducts());

export default store;