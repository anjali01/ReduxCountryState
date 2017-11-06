import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import entireAppStore from './Store'
import { fetchingCountries } from './Actions'

let store = entireAppStore;

store.dispatch(fetchingCountries())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
