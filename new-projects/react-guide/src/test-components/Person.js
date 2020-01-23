import React, { Component } from 'react';
// this css is not scoped to this file, it just lets webpack know it exists
import './person.css';

//--------This is a presentation component/ dumb component, ideally you have more of these
const person = props => {
  return (
    <div className = "Person">
      <p>
        I am a {props.name} and my age is {Math.floor(100 * Math.random())} tag?
      </p>
      <button onClick={props.click}> sub</button>
      <input type='text' onChange={props.changed} />
      <p>{props.children}</p>
    </div>
  );
};
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

export default person;
