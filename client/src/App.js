import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header.js';
import Main from './Main';
import React, { useState, useEffect } from 'react'

class App extends React.Component {

  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="bg-image">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
