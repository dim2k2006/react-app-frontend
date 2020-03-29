import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import get from 'lodash/get';
import routes from '../../routes';
import { actions as userActions } from './user';
import { actions as errorMessageActions } from './errorMessage';
import { getUserEntryPoint } from '../../utils';

const userAuthenticatingState = createSlice({
  name: 'userAuthenticatingState',
  initialState: 'none',
  reducers: {
    authenticateUserRequest() {
      return 'requested';
    },
    authenticateUserFailure() {
      return 'failed';
    },
    authenticateUserSuccess() {
      return 'finished';
    },
    authenticateUserReset() {
      return 'none';
    },
  },
});

const {
  authenticateUserRequest,
  authenticateUserSuccess,
  authenticateUserFailure,
  authenticateUserReset,
} = userAuthenticatingState.actions;

const authenticateUser = (data, resetFn, redirectFn) => async (dispatch) => {
  dispatch(authenticateUserRequest());

  try {
    const response = await axios.post(routes.authenticateUserPath(), data);
    const user = get(response, 'data.response');
    const entryPoint = getUserEntryPoint(user);

    dispatch(userActions.fetchUser({ user }));

    dispatch(authenticateUserSuccess());

    resetFn();

    redirectFn(entryPoint);
  } catch (error) {
    const status = get(error, 'response.status', 500);

    if (status === 500) {
      dispatch(errorMessageActions.showError({ message: 'serverErrors.authenticateUser' }));

      dispatch(authenticateUserReset());

      return;
    }

    dispatch(authenticateUserFailure());
  }
};

const actions = { ...userAuthenticatingState.actions, authenticateUser };

export { actions };

export const getUserAuthenticatingState = (state) => ({
  isRequested() {
    return state.userAuthenticatingState === 'requested';
  },
  isFailed() {
    return state.userAuthenticatingState === 'failed';
  },
  isFinished() {
    return state.userAuthenticatingState === 'finished';
  },
});

export default userAuthenticatingState.reducer;
