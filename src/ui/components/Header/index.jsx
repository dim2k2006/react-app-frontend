import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import logo from '../../assets/images/logo.svg';
import { getSelector } from '../../../redux/slices';
import connect from '../../../connect';

const Header = ({ terminateUser }) => {
  const userAuthenticatingState = useSelector(getSelector('userAuthenticatingState'));
  const userId = useSelector(getSelector('userId'));
  const logout = () => terminateUser({ id: userId });

  return (
    <header className="Header position-relative w-100">
      <div className="Header__container position-fixed w-100 d-flex align-items-center justify-content-center bg-primary">
        {userAuthenticatingState.isFinished() && (
          <div className="Header__btn position-absolute">
            <button
              type="button"
              className="close Header__close p-2"
              aria-label="Log out"
              onClick={logout}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        <div className="Header__logo">
          <img src={logo} alt="Fast banana" />
        </div>
      </div>
    </header>
  );
};

export default connect()(Header);
