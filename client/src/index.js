import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import * as actions from './actions';

const appRoot = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appRoot
);

window.addEventListener('load', async () => {
  if (window.web3) {
    if (window.web3.currentProvider.isMetaMask) {
      store.dispatch(actions.web3Connect());
    }
  }
});

serviceWorker.unregister();
