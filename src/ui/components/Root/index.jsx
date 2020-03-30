import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import FlowRoute from '../FlowRoute';
import AppRoute from '../AppRoute';
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
        <FlowRoute fallback={routes.welcomePage()}>
          <Details />
        </FlowRoute>
      </PrivateRoute>

      <PrivateRoute path={routes.termsPage()}>
        <FlowRoute fallback={routes.welcomePage()}>
          <Terms />
        </FlowRoute>
      </PrivateRoute>

      <PrivateRoute path={routes.welcomePage()}>
        <AppRoute>
          <Welcome />
        </AppRoute>
      </PrivateRoute>

      <PrivateRoute path={routes.rootPage()}>
        <AppRoute>
          <Home />
        </AppRoute>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Root;
