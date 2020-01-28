import React from 'react';
import './person-css.js';
import StyledDiv from './person-css';
const person = ( props ) => {

    /*
        // This is how you would throw some errors
        if(Math.random() > .7){
            throw new Error('Random Error Occuring')
        }
    */
 
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <button onClick={() => props.delete(props.index)}>Delete Me</button>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};

export default person;



