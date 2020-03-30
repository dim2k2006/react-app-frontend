import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelector } from '../../../redux/slices';

const FlowRoute = ({ children, fallback, ...rest }) => {
  const userStatus = useSelector(getSelector('userStatus'));
  const userEntryPoint = useSelector(getSelector('userEntryPoint'));

  return (
    <Route
      {...rest} // eslint-disable-line
      render={({ location }) => {
        const path = get(location, 'pathname');
        const isValid = userStatus.isValid();
        const isMatch = userEntryPoint === path;

        if (isValid) {
          return (<Redirect to={{ pathname: fallback, state: { from: location } }} />);
        }

        return isMatch
          ? (children)
          : (<Redirect to={{ pathname: userEntryPoint, state: { from: location } }} />);
      }}
    />
  );
};

FlowRoute.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.string.isRequired,
};

export default FlowRoute;
