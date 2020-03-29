import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Login from '../../pages/Login';
import Details from '../../pages/Details';
import Terms from '../../pages/Terms';
import Welcome from '../../pages/Welcome';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>

      <PrivateRoute path="/details">
        <Details />
      </PrivateRoute>

      <PrivateRoute path="/terms">
        <Terms />
      </PrivateRoute>

      <PrivateRoute path="/welcome">
        <Welcome />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Root;
