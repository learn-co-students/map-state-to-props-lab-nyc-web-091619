import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'
import { createStore } from 'redux';
import {Provider} from 'react-redux'


// add imports and code
let store = createStore(manageUsers, window.__REDUX_DEV_TOOLS_EXTENSION__&&window.__REDUX_DEV_TOOLS_EXTENSION__())

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
