import React from 'react';
import { Route, Switch } from 'react-router-dom';

// imported pages
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Products from './pages/Products/Products';
import CostumerCheckout from './pages/CostumerCheckout/Costumer';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ CostumerCheckout } />
    </Switch>
  );
}

export default App;
