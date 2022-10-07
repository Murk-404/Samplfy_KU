import './App.css';
import Header from './Header/Header.js';
import Main from './Main';
import React from 'react'

class App extends React.Component {
  
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
