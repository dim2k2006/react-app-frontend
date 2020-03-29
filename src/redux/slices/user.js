import { createSlice } from '@reduxjs/toolkit';
import get from 'lodash/get';
import find from 'lodash/find';

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

const entryMap = [
  {
    checker: (email) => !!email === false,
    process: () => '/details',
  },
  {
    checker: (email, acceptTerms) => acceptTerms === false,
    process: () => '/terms',
  },
  {
    checker: (email, acceptTerms) => !!email && acceptTerms,
    process: () => '/welcome',
  },
];

export const getUserEntryPoint = (state) => {
  const email = get(state, 'user.email');
  const acceptTerms = get(state, 'user.acceptTerms');
  const entryItem = find(entryMap, (item) => item.checker(email, acceptTerms));
  const process = get(entryItem, 'process');
  const entryPoint = process();

  return entryPoint;
};

export default user.reducer;
