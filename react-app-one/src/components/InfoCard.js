import React from 'react'; // import the React library



// colorOne, colorTwo 
const InfoCard = (cardInfo) => {

	//<h1 style={{color:cardInfo.color, fontWeight:fWeight}}>{cardInfo.text}</h1>;
	// return(
	// 	<div className="jumbotron" style={{backgroundColor:cardInfo.colorTwo}}>
	// 		<p style={{color:cardInfo.colorOne}}>{cardInfo.colorOne} on {cardInfo.colorTwo}</p>
	// 	</div>	
	// );


	// title, description, imagePath
	var divStyle = {
		width: '50%'
		};
		return(


			<div className="card bg-primary text-white" style={divStyle}>
				<div class="card-header">{cardInfo.title}</div>
				<div class="card-body">{cardInfo.description}</div> 
				<div class="card-body"><img src={cardInfo.imagePath} alt="cat" style={divStyle}></img></div>
				
			</div>	
		);
}


export default InfoCard;