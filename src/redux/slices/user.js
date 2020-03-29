import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    fetchUser(state, action) {
      return action.payload.user;
    },
  },
});

const actions = { ...user.actions };

export { actions };

export default user.reducer;
