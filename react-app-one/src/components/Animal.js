import React from 'react';
// import { tsPropertySignature } from '@babel/types';
// import './animal.css';

const Animal = (props) => {

    return(
        <div className = "animal card">
            <h2>{props.name}</h2>
            <hr/>
            <button onClick={()=>props.onPetAnimal("Now Petting The" + props.name + "!")} className="btn btn-primary"> Pet The {props.name}</button>
        </div>

    );
}

export default Animal;