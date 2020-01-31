// look into https://css-tricks.com/css-modules-part-1-need/
import React, { Component, Fragment } from 'react';
import styles from './app.module.css';
import {styleHeader,StyledButton} from './app-css';
import Persons from './test-components/Persons';
import withClass from './hoc/withClass';

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
    showPersons: false,
    changeCounter: 0
  }

  // rarely used, no http requests -side effects
  // static method to sync state, here we update based on props that affect state
  static getDerivedStateFromProps(props, state){
    return state
  }

  // CANCEL updating process for performace - No side effects here
  shouldComponentUpdate(nextProps, nextState){
    return true
  }
  // rarely used
  //  used for preparing correctly but used by getDerivedFromProps
  //componentWillMount(){}
  componentDidMount(){
    
  }

  shouldComponentUpdate(){
    return true
  }

  componentDidUpdate(){}


  // react decides if real dom needs to be changed after virtual dom is updated
  // after render we render the child components
  // after render we can use getSnapshotBeforeUpdate to get things like scrolling position of the user
  // component did update next can now be used to make http request, can cause infinite loops
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
      // <Fragment> you can use fragment instead of a div to wrap your jsx
      <div className="App" style={styleHeader}>
        <h1>Hi, I'm a React App: {this.props.appTitle}</h1>
        <p>This is really working!</p>
        <p>Number of Edits: {this.state.changeCounter}</p>
        <StyledButton color = {color}
        onClick={this.togglePersonsHandler}>{toggle}</StyledButton>
        {persons}

        {/* <button className={`${styles.button} ${styles.button}`}>Test Button</button> */}
      </div>

      // </Fragment>    
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

    // set state is scheduled state update, not guarenteed to happen immediately
    // when doing things that don't depend on the old state we just pass the object
    this.setState( {persons: persons} );

    // For a counter we could use this to add 1 to the prev state
    this.setState( (prevState, currProps)=>{
          return {
                  persons: persons,
                  changeCounter: prevState.changeCounter+1
                }
        } 
    );
  
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

export default withClass(App, App.name);
