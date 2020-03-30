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
import Home from '../../pages/Home';
import routes from '../../../routes';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path={routes.loginPage()}>
        <Login />
      </Route>

      <PrivateRoute path={routes.detailsPage()}>
        <Details />
      </PrivateRoute>

      <PrivateRoute path={routes.termsPage()}>
        <Terms />
      </PrivateRoute>

      <PrivateRoute path={routes.welcomePage()}>
        <Welcome />
      </PrivateRoute>

      <PrivateRoute path={routes.rootPage()}>
        <Home />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Root;
