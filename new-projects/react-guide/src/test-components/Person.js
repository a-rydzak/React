import React from 'react';
import './person-css.js';
import StyledDiv from './person-css';
const person = ( props ) => {
 
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <button onClick={() => props.delete(props.index)}>Delete Me</button>
            <input type="text" onChange={(event) => props.changed(event, person.id)} value={props.name} />
        </StyledDiv>
    )
};

export default person;



