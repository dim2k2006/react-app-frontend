import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import { getSelector } from '../../../redux/slices';

const Root = () => {
  const userAuthenticatingState = useSelector(getSelector('userAuthenticatingState'));

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/profile">
          {!userAuthenticatingState.isFinished() && (
            <Redirect to="/" />
          )}

          {userAuthenticatingState.isFinished() && (
            <Profile />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
