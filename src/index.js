import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { storeCounter } from './store/store'
import { Provider } from 'react-redux'

//3-wrap all app with redux provider
ReactDOM.render(
  <Provider store={storeCounter}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
