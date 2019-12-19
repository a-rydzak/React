import React, { Component } from 'react';
import Header from './test-components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <h1>Andrew Was Here!</h1>
      </div>
    );
  }
}

export default App;
