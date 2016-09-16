import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import HelloReducer from './reducers/HelloReducer'
import AppContainer from './AppContainer';
import './index.css';

console.log('from index.js');
let store = createStore(HelloReducer, {text: 'Initial value from createStore'});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
