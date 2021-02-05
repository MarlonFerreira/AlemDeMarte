import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Login" render={props => <Login {...props} />} />
          <Route exact path="/home/:id_usuario" name="Home" render={props => <Home {...props} />}>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}


