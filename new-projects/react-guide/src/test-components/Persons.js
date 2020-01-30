import React from 'react';
import {Component, PureComponent} from 'react';
import Person from './Person';
import ErrorHandler from '../Error-Components/ErrorHandler';

class Persons extends PureComponent{ // purecomoonent impliments component with a complete props check

    componentDidMount(){
        console.log('Persons Mounted')
    }

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
                //  React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering
                // React.memo(Persons) strictly with functionsal component that operates on props
                // in this case React.memo would be used and person would always return true for component should update
export default  Persons;

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
