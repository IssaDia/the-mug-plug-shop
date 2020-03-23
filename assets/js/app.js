import '../css/app.css';
import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, browserHistory } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Default from './components/Default';
import Cart from './components/Cart';
import Homepage from './pages/Homepage';
import { Provider } from 'react-redux';
import store from './store';
import ProductPage from './pages/ProductPage';
import SingleProductPage from './pages/SingleProductPage';
import Connexion from './pages/Connexion';
import ChatPage from './pages/ChatPage';
import PaymentPage from './pages/PaymentPage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const App = () => {

    return (
      <>
      <HashRouter>
        <Provider store={store}>   
          <NavigationBar />
              <Switch>  
                  <Route path="/cart" component={Cart}/>
                  <Route path="/contact"/>
                  <Route path="/products/:id" component={SingleProductPage}/>
                  <Route path="/products" component={ProductPage}/>
                  <Route path="/connexion" component={Connexion}/>
                  <Route path="/chat" component={ChatPage}/>
                  <Route path="/payment" component={PaymentPage}/>
                  <Route path="/" component={Homepage}/>
                  <Route component={Default} /> 
              </Switch>
          <Footer />
        </Provider>          
    </HashRouter> 
    <ToastContainer></ToastContainer>
    </>

    );
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
