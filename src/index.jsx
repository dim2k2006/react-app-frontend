import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reducer from './redux/slices';
import Root from './ui/components/Root/index';

const store = configureStore({
  reducer,
});

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);
