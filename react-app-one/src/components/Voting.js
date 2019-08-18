import React from 'react'; // import the React library


const VotingForm = () =>{
    
    let divStyle = {width: '50%'};
    let oscar = <button id="Oscar" onClick={function(){alert("You Voted For Oscar")}}>Oscar</button>;
    let koshka = <button id="Koshka" onClick={()=> alert("You Voted For Koshka")}>Koshka</button>;
    let catniss = <button id="Catniss" onClick={()=> alert("You Voted For Catniss")}>Catniss</button>;
    let mugwai = <button id="Mugwai" onClick={()=> alert("You Voted For Mugwai")}>Mugwai</button>;

    return(
        <div className="card bg-primary text-white" style={divStyle}>
            <div class="card-header">Why Not Vote For A Cat?</div>
            <div class="card-body">{oscar}</div> 
            <div class="card-body">{koshka}</div> 
            <div class="card-body">{catniss}</div> 
            <div class="card-body">{mugwai}</div> 
        </div>	        
    );
}

export default VotingForm;