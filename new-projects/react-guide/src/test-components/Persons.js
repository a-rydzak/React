import React from 'react';
import {Component} from 'react';
import Person from './Person';

class Persons extends Component{

    render() {
    
        return this.props.people.map((person, index) => {
                return (
                    <ErrorHandler key = {person.id}>
                        <Person 
                                delete={this.props.delete} 
                                name={person.name} 
                                age={person.age} 
                                changed={(event) => this.props.changed(event, person.id)} 
                        /> 
                     </ErrorHandler>
                );
            })
        }
}
        
export default Persons;

/*
const persons = (props) => (
    <div>
        {props.people.map((person, index) => {
            return (<ErrorHandler key = {person.id}>
                    <Person
                    delete={props.delete}
                    name={person.name} 
                    age={person.age}
                    changed={(event) => props.changed(event, person.id)} /> 
                </ErrorHandler>
                )
            })}
    </div>
  );
  export default persons;
*/
