import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Productspage from './pages/Productspage';

import { HashRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <main className='container pt-5'>
                <Switch>
                    <Route path="/products" component={Productspage}></Route>
                    <Route path="/" component={Homepage}></Route>
                </Switch>
                
            </main>
                
        </HashRouter>
);
  };

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
