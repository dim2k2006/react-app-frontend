import { combineReducers } from '@reduxjs/toolkit';

import userAuthenticatingState, { actions as userAuthenticatingStateActions, getUserAuthenticatingState } from './userAuthenticatingState';
import user, { actions as userActions } from './user';

export default combineReducers({
  userAuthenticatingState,
  user,
});

const actions = {
  ...userAuthenticatingStateActions,
  ...userActions,
};

export { actions };

const selectors = {
  userAuthenticatingState: getUserAuthenticatingState,
};

const getSelector = (type) => selectors[type];

export { getSelector };
