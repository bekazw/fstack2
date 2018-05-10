import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import Auth from '../Auth/Auth';
import Main from '../Main/Main';

const Show = (pag) => {
  switch (pag.pag) {
    case "/auth" :
      return <Auth />
    case "/main" :
      return <Main />
  }
}

const App = ({curPage}) => {
  return (
    <div className = "App" >    
      <Show pag = {curPage} />
    </div>
  )
}
const mapStateToProps = (state) => ({    
  curPage : state.curPage    
})

export default connect(mapStateToProps)(App);
