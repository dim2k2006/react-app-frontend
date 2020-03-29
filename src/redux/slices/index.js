import { combineReducers } from '@reduxjs/toolkit';

import userAuthenticatingState, { actions as userAuthenticatingStateActions, getUserAuthenticatingState } from './userAuthenticatingState';
import userUpdatingState, { actions as userUpdatingStateActions, getUserUpdatingState } from './userUpdatingState';
import userTerminatingState, { actions as userTerminatingStateActions } from './userTerminatingState';
import user, {
  actions as userActions,
  getUserId,
} from './user';

import errorMessage, { actions as errorMessageActions, getErrorMessage } from './errorMessage';

export default combineReducers({
  userAuthenticatingState,
  userUpdatingState,
  userTerminatingState,
  user,
  errorMessage,
});

const actions = {
  ...userAuthenticatingStateActions,
  ...userUpdatingStateActions,
  ...userTerminatingStateActions,
  ...userActions,
  ...errorMessageActions,
};

export { actions };

const selectors = {
  userAuthenticatingState: getUserAuthenticatingState,
  userUpdatingState: getUserUpdatingState,
  userId: getUserId,
  errorMessage: getErrorMessage,
};

const getSelector = (type) => selectors[type];

export { getSelector };
