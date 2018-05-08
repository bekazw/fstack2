import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { Route, BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';

import { createStore }  from 'redux';
import init from './redux/reducers';

let store = createStore(init);

console.log(store.getState());

ReactDOM.render(
    <BrowserRouter> 
    <div>
        <Route exact path = "/" component = {App} />     
        <Route path = "/main" component = {Main} />  
    </div>
    </BrowserRouter>,
    document.getElementById('root'));
