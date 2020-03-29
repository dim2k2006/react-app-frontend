import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Login from '../../pages/Login';
import Details from '../../pages/Details';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <PrivateRoute path="/details">
        <Details />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Root;
