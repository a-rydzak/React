import React from 'react';
import ErrorHandler from '../Error-Components/ErrorHandler';
import Person from './Person'

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