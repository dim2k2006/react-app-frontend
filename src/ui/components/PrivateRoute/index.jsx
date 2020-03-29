import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelector } from '../../../redux/slices';

const PrivateRoute = ({ children, ...rest }) => {
  const userAuthenticatingState = useSelector(getSelector('userAuthenticatingState'));

  return (
    <Route
      {...rest} // eslint-disable-line
      render={({ location }) => {
        const isAuthenticated = userAuthenticatingState.isFinished();

        return isAuthenticated
          ? (children)
          : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
