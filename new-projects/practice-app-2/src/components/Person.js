import React from 'react';


const Person = props => {

    const styles ={
        margin:'auto'
         
    }

    return(
        <div style={styles}>
            <p>Hi I am {props.name}</p>
            <button style={{display:'block', margin:'auto'}}onClick={()=>props.deleteMe(props.index)}>Delete Me</button>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person;

