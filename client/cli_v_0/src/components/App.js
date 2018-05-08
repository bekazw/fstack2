import React, { Component } from 'react';
import './App.css';

import Auth from './Auth/Auth';
import Main from './Main/Main';

import { connect } from 'react-redux';


function App({curId, curPage, curIP, curCook}){
    switch (curPage) {
      case 0 :
        return (
         <Auth />
        )
      case 1 :
        return (
          <Main />
        )
    }
}

const mapStoreToProps = state => {
  return {
    curId : state.curId,
    curPage : state.curPage,
    curIP : state.curIP,
    curCook : state.curCook
  }
}

export default connect(mapStoreToProps)(App);
