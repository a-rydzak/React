import React from 'react'; // import the React library



class HelloReact extends React.Component{

		constructor(props){
			super(props);
			this.handleClick = this.handleClick.bind(this);
			this.state={greeting:"React", excitment:"", count:0};
		}

		handleClick = () =>{
			if(this.state.greeting =="React"){
				this.setState((state) => (
					{greeting: "Not React" }
				));
			}else{
				this.setState((state) => (
					{greeting: "React" }
				));
			}
		}
		
		render(){
			return(
				<div className="jumbotron">
					{/*this.setState({greeting:"Not React"})} does not rely on the current state greetint  */}
					{/*<h1 onClick={() => this.setState({greeting:"Not React"})}>Lets all {this.state.greeting}{this.state.excitment}</h1> */} 
					<h1 onClick={() => this.handleClick()}>Lets all {this.state.greeting}{this.state.excitment}</h1>

					<p>{this.props.description}</p>
					{/* onClick={() =>this.setState((state) => ({excitment: state.excitment + "!" })) } relies on the current states value */}
					<button onClick={() =>this.setState((state) => ({excitment: state.excitment + "!" })) } className="btn btn-primary">Add Excitment</button>
					<button onClick={() =>this.setState((state) => ({count: state.count+ 1 })) } className="btn btn-primary">Add Count</button>
					<p>Current Count is: {this.state.count}</p>
					
				</div>	
			);
		}
}

// const HelloReact = (props) => {
// 	return(
// 		<div className="jumbotron">
// 			<h1>Lets all {props.title}</h1>
// 			<p>{props.title}: {props.description}</p>
// 		</div>	
// 	);
// }

export default HelloReact;