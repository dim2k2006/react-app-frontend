import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import get from 'lodash/get';
import routes from '../../routes';
// import { actions as messagesActions } from './messages';
// import { actions as errorMessageActions } from './errorMessage';

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
  },
});

const {
  authenticateUserRequest,
  authenticateUserSuccess,
  authenticateUserFailure,
} = userAuthenticatingState.actions;

const authenticateUser = (data, resetFn, redirectFn) => async (dispatch) => {
  dispatch(authenticateUserRequest());

  try {
    const response = await axios.post(routes.authenticatePath(), data);
    const user = get(response, 'data.response');

    console.log('user:', user);

    dispatch(authenticateUserSuccess());

    resetFn();

    redirectFn();
  } catch (e) {
    dispatch(authenticateUserFailure());

    // dispatch(errorMessageActions.showError({ message: 'SUBMIT_MESSAGE' }));
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
