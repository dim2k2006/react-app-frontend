import { saveState } from '../../utils';

const stateSaver = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  saveState(state);

  return result;
};

export default stateSaver;
