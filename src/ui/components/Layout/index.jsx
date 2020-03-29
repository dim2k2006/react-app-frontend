import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/index';
import ErrorMessage from '../ErrorMessage';

const Layout = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <ErrorMessage />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
