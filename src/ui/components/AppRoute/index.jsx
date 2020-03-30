import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelector } from '../../../redux/slices';

const AppRoute = ({ children, ...rest }) => {
  const userStatus = useSelector(getSelector('userStatus'));
  const userEntryPoint = useSelector(getSelector('userEntryPoint'));

  return (
    <Route
      {...rest} // eslint-disable-line
      render={({ location }) => {
        const isValid = userStatus.isValid();

        return isValid
          ? (children)
          : (<Redirect to={{ pathname: userEntryPoint, state: { from: location } }} />);
      }}
    />
  );
};

AppRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppRoute;
