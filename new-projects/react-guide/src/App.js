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

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName },
        { name: this.state.persons[2].name },
        { name: this.state.persons[0].name }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value },
        { name: this.state.persons[2].name },
        { name: this.state.persons[0].name }
      ]
    });
  };

  render(myName) {
    return (
      <div className='App'>
        <Header />
        <button onClick={() => this.switchNameHandler('Andrew')}>
          Click Me
        </button>

        <Person
          name={this.state.persons[0].name}
          // -This is preferd over  () => this.switchNameHandler('Andrew') as it is less effecinet
          click={this.switchNameHandler.bind(this, 'billy')}
          changed={this.nameChangedHandler}
        />
        
        <Person
          name={this.state.persons[1].name}
          // -This is preferd over  () => this.switchNameHandler('Andrew') as it is less effecinet
          click={() => this.switchNameHandler('Susan')}
          changed={this.nameChangedHandler}
        />

        {/* <Person
          name={this.state.persons[1].name}
          click={this.switchNameHandler.bind(this, 'joel')}
        >
          I am being passed as a child
        </Person>

        <Person
          name={this.state.persons[2].name}
          click={this.switchNameHandler.bind(this, 'sue')}
        /> */}
      </div>
    );
  }
}

export default App;
