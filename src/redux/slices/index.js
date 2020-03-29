import { combineReducers } from '@reduxjs/toolkit';

import userAuthenticatingState, { actions as userAuthenticatingStateActions, getUserAuthenticatingState } from './userAuthenticatingState';
import user, { actions as userActions } from './user';

import errorMessage, { actions as errorMessageActions, getErrorMessage } from './errorMessage';

export default combineReducers({
  userAuthenticatingState,
  user,
  errorMessage,
});

const actions = {
  ...userAuthenticatingStateActions,
  ...userActions,
  ...errorMessageActions,
};

export { actions };

const selectors = {
  userAuthenticatingState: getUserAuthenticatingState,
  errorMessage: getErrorMessage,
};

const getSelector = (type) => selectors[type];

export { getSelector };
