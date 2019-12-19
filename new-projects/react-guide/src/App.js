import React, { Component } from 'react';
import Header from './test-components/Header';
import Person from './test-components/Person';
import './App.css';

class App extends Component {
  // longic here
  //State is a reserved word
  state = {
    persons: [{ name: 'Andrew' }, { name: 'Joe' }, { name: 'Billy' }]
  };

  switchNameHandler = () => {
    const firstName = this.state.persons[0].name;
    this.setState({
      persons: [
        { name: this.state.persons[1].name },
        { name: this.state.persons[2].name },
        { name: this.state.persons[0].name }
      ]
    });
  };

  render(myName) {
    return (
      <div className='App'>
        <Header />
        <button onClick={this.switchNameHandler}>Click Me</button>

        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name}>
          I am being passed as a child
        </Person>
        <Person name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;
