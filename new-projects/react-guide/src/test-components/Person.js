import React from 'react';
// https://styled-components.com/ for interesting style componets
import styled from 'styled-components';
import './person.css';

const person = ( props ) => {

    // This is a react component 
    const StyledDiv =styled.div` 
        width:60%;
        margin: auto;
        box-shadow: grey;
        border: 4px solid black;
        text-align: center;
    `

    const style = {
        '@media (max-width: 500px)':{
            width:'450px'
          }
    }
    return (
        // <StyledDiv>
            <div className="Person" style={style}>
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <button onClick={() => props.delete(props.index)}>Delete Me</button>
                <input type="text" onChange={(event) => props.changed(event, person.id)} value={props.name} />
            </div>
        // </StyledDiv>
    )
};

export default person;


// class Person extends Component {
//   render() {
//     return (
//       // dont use class for className
//       <div className='Header'>
//         <header>
//           <ul>
//             <h3>This is Not a Header</h3>
//             <li>A</li>
//             <li>B</li>
//             <li>C</li>
//           </ul>
//         </header>
//       </div>
//     );
//   }
// }

