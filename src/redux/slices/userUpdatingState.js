import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import get from 'lodash/get';
import routes from '../../routes';
import { actions as userActions } from './user';
import { actions as errorMessageActions } from './errorMessage';

const userUpdatingState = createSlice({
  name: 'userUpdatingState',
  initialState: 'none',
  reducers: {
    updateUserRequest() {
      return 'requested';
    },
    updateUserFailure() {
      return 'failed';
    },
    updateUserSuccess() {
      return 'finished';
    },
    updateUserReset() {
      return 'none';
    },
  },
});

const {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  updateUserReset,
} = userUpdatingState.actions;

const updateUser = (data, resetFn, redirectFn) => async (dispatch) => {
  dispatch(updateUserRequest());

  try {
    // const response = await axios.post(routes.authenticatePath(), data);
    // const user = get(response, 'data.response');

    // dispatch(userActions.fetchUser({ user }));

    dispatch(updateUserSuccess());

    resetFn();

    redirectFn();
  } catch (error) {
    const status = get(error, 'response.status', 500);

    if (status === 500) {
      dispatch(errorMessageActions.showError({ message: 'serverErrors.authenticateUser' }));

      dispatch(updateUserReset());

      return;
    }

    dispatch(updateUserFailure());
  }
};

const actions = { ...userUpdatingState.actions, updateUser };

export { actions };

export const getUserUpdatingState = (state) => ({
  isRequested() {
    return state.userUpdatingState === 'requested';
  },
  isFailed() {
    return state.userUpdatingState === 'failed';
  },
  isFinished() {
    return state.userUpdatingState === 'finished';
  },
});

export default userUpdatingState.reducer;
