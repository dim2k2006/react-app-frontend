import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default Root;
