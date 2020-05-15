import '../css/app.css'
import '../css/app.scss'
import React from "react"
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Cart from './components/Cart'
import Homepage from './pages/Homepage' 
import { Provider } from 'react-redux' 
import store from './store' 
import ProductPage from './pages/ProductPage' 
import SingleProductPage from './pages/SingleProductPage' 
import Connexion from './pages/Connexion' 
import PaymentPage from './pages/PaymentPage' 
import { ToastContainer } from 'react-toastify' 
import "react-toastify/dist/ReactToastify.css" 



{
  /*main component who display all compoenents and pages */
}

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
                  <Route path="/payment" component={PaymentPage}/>
                  <Route exact path="/" component={Homepage}/>
                  <Route component={NotFound} /> 
                  
              </Switch>
          <Footer />
        </Provider>          
    </HashRouter> 
    <ToastContainer autoClose={2000}
        className="toast-container"
        toastClassName="dark-toast" />
    </>

    ) 
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
