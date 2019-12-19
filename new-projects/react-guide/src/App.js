import React, { Component } from 'react';
import Header from './test-components/Header';
import './App.css';

class App extends Component {
  // longic here
  myName = 'Andrew';

  render(myName) {
    return (
      <div className='App'>
        <Header />
        <h1>{this.myName} Was Here!</h1>
      </div>
    );
  }
}

export default App;
