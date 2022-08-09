import React from 'react';
import { Route, Switch } from 'react-router-dom';

// imported pages
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/products" component={ Products } />
    </Switch>
  );
}

export default App;
