import '../css/app.css';
import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
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
        <Provider store={store}>
        
      <Navbar />
          <Switch>  
          <Route path="/products" component={ProductList}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/contact"/>
              <Route path="/" component={Homepage} />
              
              <Route component={Default} /> 
          </Switch>  
      </Provider>          
  </HashRouter> 

    );
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
