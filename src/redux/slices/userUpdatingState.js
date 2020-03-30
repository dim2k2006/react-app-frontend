import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import get from 'lodash/get';
import routes from '../../routes';
import { actions as userActions } from './user';
import { actions as errorMessageActions } from './errorMessage';
import { getUserEntryPoint } from '../../utils';

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
} = userUpdatingState.actions;

const refreshUser = (data, resetFn, redirectFn) => async (dispatch) => {
  dispatch(updateUserRequest());

  try {
    const response = await axios.put(routes.updateUserPath(), data);
    const user = get(response, 'data.response');
    const entryPoint = getUserEntryPoint(user);

    resetFn();

    dispatch(userActions.updateUser({ user }));

    dispatch(updateUserSuccess());

    redirectFn(entryPoint);
  } catch (error) {
    dispatch(updateUserFailure());

    dispatch(errorMessageActions.showError({ message: 'serverErrors.updateUser' }));
  }
};

const actions = { ...userUpdatingState.actions, refreshUser };

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
