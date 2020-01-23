import React from 'react';
import {Component} from 'react';
import './App.css';
import Person from './components/Person';
class App extends Component {
  state={
    persons:[{id:'A', name:'Andrew'},{id:'B', name:'Lizzy'} ],
    display:false
  }

  changeDisplay = () =>{
    let stillDisplay  = this.state.display? false : true;
    this.setState({display: stillDisplay})

  }

  nameChangedHandler = ( event, id ) => {
    console.log('yasss')
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

  deleteMe = (index) =>{

      let updatedPersons = [...this.state.persons]

      updatedPersons.splice(index,1)
      console.log((updatedPersons))
      this.setState({persons:updatedPersons})
  }

  render(){

    let allPersons = null
    if(this.state.display){
       allPersons = this.state.persons.map((person,index)=>{
        return(
          <Person key={person.id} 
                  index = {index} 
                  name={person.name} 
                  deleteMe={this.deleteMe}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
        )
      })
    }
    
    return (
      
      <div className="App">
        <button onClick={this.changeDisplay}>See My Peoples</button>
        {allPersons}
      </div>
    );
  }
}

export default App;
