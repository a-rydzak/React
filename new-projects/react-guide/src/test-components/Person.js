import React from 'react';

import './person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={(event) => props.changed(event, person.id)} value={props.name} />
        </div>
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

