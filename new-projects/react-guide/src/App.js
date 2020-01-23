import React, { Component } from 'react';
import Header from './test-components/Header';
import Person from './test-components/Person';
import './App.css';

class App extends Component {
  // longic here
  //State is a reserved word
  state = {
    persons: [{ name: 'Andrew' }, { name: 'Joe' }, { name: 'Billy' }],
    showPersons: true
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

  // whenever a component gets rendered all this occurs
  render() {

    let persons = null

    if(this.state.showPersons){
      persons = (
        <div>
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
      </div> 
      )
    }

    const styles = {
      backgroundColor: 'green',
      border: '1px solid blue',
      cursor: 'pointer'
    }

    const togglePersonHandler =() =>{
      this.state.showPersons ? this.setState({showPersons: false}): this.setState({showPersons: true})
    }

    return (
      <div className='App'>
        {/* <Header /> */}
        {/* inline styling here */}
        {/* <button style={styles} onClick={() => this.switchNameHandler('Andrew')}> */}
        <button style={styles} onClick={togglePersonHandler}>
          Toggle Persons
       
        </button>
        {persons}
        
        {/* Ternary operation update this would replace {persons} logic check*/}
        {/* { this.state.showPersons ? 
          <div>
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
          </div> : null
        } */}
      </div>
    );
  }
}

export default App;
