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
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

    return (
        <HashRouter> 
                <Switch>  
                    <Provider store={store}>
                    <Navbar />
                    <Route path="/products/:id" component={ProductPage} />
                    <Route path="/products" component={ProductList} />
                    <Route path="/cart" component={Cart}/>
                    <Route path="/contact" component={ProductList} />
                    <Route path="/" component={Homepage} />
                    </Provider>   
                    <Route component={Default} /> 
                </Switch>          
        </HashRouter>
);
  };

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
