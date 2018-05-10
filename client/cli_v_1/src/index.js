import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

const gStore = createStore(rootReducer);

ReactDOM.render(
    <Provider store = { gStore } >
     <App />
    </Provider>,
     document.getElementById('root'));

