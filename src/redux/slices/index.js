import { combineReducers } from '@reduxjs/toolkit';

import userAuthenticatingState, { actions as userAuthenticatingStateActions, getUserAuthenticatingState } from './userAuthenticatingState';
import userUpdatingState, { actions as userUpdatingStateActions, getUserUpdatingState } from './userUpdatingState';
import user, {
  actions as userActions,
  getUserId,
  getUserShowEmailPhoneScreen,
  getShowTermsAndCondition,
  getShowWelcomeScreen,
} from './user';

import errorMessage, { actions as errorMessageActions, getErrorMessage } from './errorMessage';

export default combineReducers({
  userAuthenticatingState,
  userUpdatingState,
  user,
  errorMessage,
});

const actions = {
  ...userAuthenticatingStateActions,
  ...userUpdatingStateActions,
  ...userActions,
  ...errorMessageActions,
};

export { actions };

const selectors = {
  userAuthenticatingState: getUserAuthenticatingState,
  userUpdatingState: getUserUpdatingState,
  userId: getUserId,
  userShowEmailPhoneScreen: getUserShowEmailPhoneScreen,
  userShowTermsAndCondition: getShowTermsAndCondition,
  userShowWelcomeScreen: getShowWelcomeScreen,
  errorMessage: getErrorMessage,
};

const getSelector = (type) => selectors[type];

export { getSelector };
