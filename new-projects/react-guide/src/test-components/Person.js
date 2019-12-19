import React, { Component } from 'react';

//--------This is a presentation component/ dumb component
const person = props => {
  return (
    <div>
      <p>
        I am a {props.name} and my age is {Math.floor(100 * Math.random())} tag?
      </p>
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
