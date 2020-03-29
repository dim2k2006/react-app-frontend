import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../routes';
import { actions as userAuthenticatingStateActions } from './userAuthenticatingState';
import { actions as errorMessageActions } from './errorMessage';

const userTerminatingState = createSlice({
  name: 'userTerminatingState',
  initialState: 'none',
  reducers: {
    terminateUserRequest() {
      return 'requested';
    },
    terminateUserFailure() {
      return 'failed';
    },
    terminateUserSuccess() {
      return 'finished';
    },
  },
});

const {
  terminateUserRequest,
  terminateUserSuccess,
  terminateUserFailure,
} = userTerminatingState.actions;

const terminateUser = (data) => async (dispatch) => {
  dispatch(terminateUserRequest());

  try {
    await axios.post(routes.terminateUserPath(), data);

    dispatch(userAuthenticatingStateActions.authenticateUserReset());

    dispatch(terminateUserSuccess());
  } catch (error) {
    dispatch(errorMessageActions.showError({ message: 'serverErrors.terminateUser' }));

    dispatch(terminateUserFailure());
  }
};

const actions = { ...userTerminatingState.actions, terminateUser };

export { actions };

export default userTerminatingState.reducer;
