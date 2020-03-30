import { createSlice } from '@reduxjs/toolkit';
import get from 'lodash/get';
import { getUserEntryPoint as getEntryPoint } from '../../utils';

const user = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    fetchUser(state, action) {
      return action.payload.user;
    },
    updateUser(state, action) {
      return { ...state, ...action.payload.user };
    },
  },
});

const actions = { ...user.actions };

export { actions };

export const getUserId = (state) => get(state, 'user.id');

export const getUserEntryPoint = (state) => getEntryPoint(get(state, 'user'));

export const getUserStatus = (state) => ({
  isValid() {
    return !!get(state, 'user.email') && !!get(state, 'user.acceptTerms');
  },
});

export default user.reducer;
