import React from 'react'; // import the React library
import ReactDOM from 'react-dom'; // import the ReactDOM library


// colorOne, colorTwo 
const ComposableSquares = (context) => {

	//<h1 style={{color:context.color, fontWeight:fWeight}}>{context.text}</h1>;
	return(
		<div className="jumbotron" style={{backgroundColor:context.colorTwo}}>
			<p style={{color:context.colorOne}}>{context.colorOne} on {context.colorTwo}</p>
		</div>	
	);
}





 

export default ComposableSquares;