import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import authReducer from './redux/reducers/auth';

const storeReducer = combineReducers ({
    authReducer
})

const gStore = createStore(authReducer);
console.log(gStore.getState());

ReactDOM.render(
    <Provider store = { gStore } >
         <App />
    </Provider>,
     document.getElementById('root'));

