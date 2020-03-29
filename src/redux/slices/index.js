import { combineReducers } from '@reduxjs/toolkit';

import userAuthenticatingState, { actions as userAuthenticatingStateActions, getUserAuthenticatingState } from './userAuthenticatingState';

export default combineReducers({
  userAuthenticatingState,
});

const actions = {
  ...userAuthenticatingStateActions,
};

export { actions };

const selectors = {
  userAuthenticatingState: getUserAuthenticatingState,
};

const getSelector = (type) => selectors[type];

export { getSelector };
