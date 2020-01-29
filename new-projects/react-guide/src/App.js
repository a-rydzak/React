// look into https://css-tricks.com/css-modules-part-1-need/
import React, { Component } from 'react';
import styles from './app.module.css';
import {styleHeader,StyledButton} from './app-css';
import Persons from './test-components/Persons';
import ErrorHandler from './Error-Components/ErrorHandler';

class App extends Component {
  constructor(props){
    // super props only needed if you use constructor 
    super(props)
    //  you can add this.state = here it's just not as modern syntax
  }

  state = {
    persons: [
      { id: 'A', name: 'Andrew', age: 28 },
      { id: 'B', name: 'Lizzy', age: 29 },
      { id: 'C', name: 'Catniss', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // static method to sync state
  static getDerivedStateFromProps(props, state){
    return state
  }

  //  used for preparing correctly but used by getDerivedFromProps
  componentWillMount(){

  }

  componentDidMount(){
    console.log('Component Did Mount')
  }


  // react decides if real dom needs to be changed after virtual dom is updated
  render () {
    let toggle = 'Toggle Persons'
    let color = 'white'

    if(this.state.persons.length === 0){
      color = 'red'
      toggle = 'No More Persons to Display'
    }


    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons people={this.state.persons} 
                         delete={this.deletePersonHandler}
                         changed={this.nameChangedHandler}/>
    }

    return (
      <div className="App" style={styleHeader}>
        <h1>Hi, I'm a React App: {this.props.appTitle}</h1>
        <p>This is really working!</p>
        <StyledButton color = {color}
        onClick={this.togglePersonsHandler}>{toggle}</StyledButton>
        {persons}

        {/* <button className={`${styles.button} ${styles.button}`}>Test Button</button> */}
      </div>
    );
  }

  // start of all methods
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
}

export default App;
