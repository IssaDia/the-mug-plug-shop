import '../css/app.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Cart from './components/Cart';
import Homepage from './pages/Homepage';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';


import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { fetchAllProducts } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAllProducts());

const App = () => {



    return (
        <HashRouter>
            <Navbar />
            <main className='container pt-5'>
                <Switch>  
                    <Provider store={store}>
                    <Route path="/products/:id" component={ProductPage} />
                    <Route path="/products" component={ProductList} />
                    <Route path="/cart" component={Cart}/>
                    <Route path="/contact" component={ProductList} />
                    <Route path="/" component={Homepage} />
                    </Provider>   
                    <Route component={Default} /> 
                </Switch>  
            </main>         
        </HashRouter>
);
  };

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
