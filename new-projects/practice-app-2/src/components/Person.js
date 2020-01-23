import React from 'react';


const Person = props => {

    return(
        <div>
            <p>Hi I am {props.name}</p>
            <button onClick={()=>props.deleteMe(props.index)}>Delete Me</button>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person;

