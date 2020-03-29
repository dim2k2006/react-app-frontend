import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reducer from './redux/slices';
import Root from './ui/components/Root/index';
import stateSaver from './redux/middleware/stateSaver';
import { loadState } from './utils';

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), stateSaver],
  preloadedState: loadState(),
});

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);
