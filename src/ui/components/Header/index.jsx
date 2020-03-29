import React from 'react';
import './index.css';
import logo from '../../assets/images/logo.svg';

const Header = () => (
  <header className="Header d-flex align-items-center justify-content-center bg-primary">
    <div className="Header__logo">
      <img src={logo} alt="Fast banana" />
    </div>
  </header>
);

export default Header;
