import React, { Component } from 'react';
import {styleHeader ,style} from './app-css';

import Person from './test-components/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'A', name: 'Andrew', age: 28 },
      { id: 'B', name: 'Lizzy', age: 29 },
      { id: 'C', name: 'Catniss', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    let toggle = 'Toggle Persons'
    let color = 'white'  

    if(this.state.persons.length ==0){
      color = 'red'
      toggle = 'No More Persons to Display'
    }

    const style = {
      backgroundColor: color,
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              delete={this.deletePersonHandler}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={this.nameChangedHandler} />
          })}
        </div>
      );
    }


    return (
      <div className="App" style={styleHeader}>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
    onClick={this.togglePersonsHandler}>{toggle}</button>
        {persons}
      </div>
    );
  }
}

export default App;
