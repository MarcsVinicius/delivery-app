import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return ( // Padrão para inserir rotas
    <Switch>
      <Route exact path="/login" component={ Login } />
    </Switch>
  );
}

export default App;
