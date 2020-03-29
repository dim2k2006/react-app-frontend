import { createSlice } from '@reduxjs/toolkit';
import get from 'lodash/get';

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

export default user.reducer;
