import React from 'react'; // import the React library
import ReactDOM from 'react-dom'; // import the ReactDOM library

// we can create a simple element to display on our HTML page
// 
 
// with JSX we can perform the same React.createElement() call with the following:
// and load our App into the DOM, targeting the div located in /public/index.html


// Method 1
//const HelloReact = React.createElement("h1", null, "Hello World");

// Method 2
//const HelloReactOne = <h1 className="Header">Hello World</h1>;

// Method 3
// const HelloReactTwo = (
// 	<div className="jumbotron">
// 		<h1>Lets all React</h1>
// 		<p>React is Javascript lib for interfaces</p>
// 	</div>
// ); 

// Method 4
// const HelloReactThree = function() {
// 	return(
// 		<div className="jumbotron">
// 			<h1>Lets all React</h1>
// 			<p>React is Javascript lib for interfaces</p>
// 		</div>	
// 	);
// }

// Method 5
// const HelloReactFour = () => {
// 	return(
// 		<div className="jumbotron">
// 			<h1>Lets all React</h1>
// 			<p>React is Javascript lib for interfaces</p>
// 		</div>	
// 	);
// }

// Method 6

import HelloReact from './components/HelloReact';
import ComposableSquares from './components/ComposableSquares';
import InfoCard from './components/InfoCard';
import ButtonOne from './components/Click';
import VotingForm from './components/Voting';
import VotingTwo from './components/VotingTwo';
import UsersContainer from './components/UsersContainer';
import App from './App';

 

// ReactDOM.render(HelloReactFour(), document.getElementById('root')); return method 1
// ReactDOM.render(<HelloReact/>, document.getElementById('root'));
let props = {
	title:"React",
	description: "Oh! hey there my bunyips!"
}

let context = {
	colorOne:"green",
	colorTwo:"red"
}

let cardInfo = {
	title:"Look At These Cats!",
    description:"This is an image of my El Gatos, todos los Gatos!",
    imagePath:"./images/cat.jpeg"
}
// ReactDOM.render(<HelloReact title="React" description:"Oh! hey there my bunyips!"/>, document.getElementById('root'));

ReactDOM.render(ComposableSquares(context), document.getElementById('root'));
// ReactDOM.render(HelloReact(props), document.getElementById('root-2'));
ReactDOM.render(<HelloReact description= "Oh! hey there my bunyips!" />, document.getElementById('root-2'));
ReactDOM.render(InfoCard(cardInfo), document.getElementById('root-3'));
ReactDOM.render(ButtonOne(), document.getElementById('root-4'));
ReactDOM.render(VotingForm(), document.getElementById('root-5'));
ReactDOM.render(<App />, document.getElementById('root-6'));
ReactDOM.render(<VotingTwo />, document.getElementById('root-7'));
ReactDOM.render(<UsersContainer />, document.getElementById('root-8'));




// ----------------------------------------------------------------------------------Other Notes
// const Title = (props) => {
//     const { text } = props;
//     return React.createElement('h1', null, text);
// }
// const App = (props) => {
//     return React.createElement('div', null,
//         React.createElement(Title, { text: 'Title One' } ),
//         React.createElement(Title, { text: 'Title Two' } ),
//         React.createElement(Title, { text: 'Title Three' } )
//     )
// }

// ----------------------------------------------------------------------------------

// const Title = (props) => {
//     return <h1>{props.text}</h1>;
// }

// ----------------------------------------------------------------------------------
// const App = (props) => {
//     return (
//         <div>
//             <Title text="Title One" />
//             <Title text="Title Two" />
//             <Title text="Title Three" />
//         </div>
//     )
// }

// ----------------------------------------------------------------------------------
// React.createElement("p", { style:{ fontWeight:"bold", color: "red" }, "Hello World");
// <p style="font-weight:bold;color:red;">Hello World</p>


// ----------------------------------------------------------------------------------
// const Title = (props) => {
	// const fWeight = (props.isImportant) ?="string from-rainbow">"bold" : "normal";
    // const fWeight = (props.isImportant) ? "string from-rainbow">"bold" : "normal";
     
    // return <h1 style={{color:props.color, fontWeight:fWeight}}>{props.text}</h1>;
    // note the double curly braces here: 
    // the style property needs to be a complete javascript object,
    // and since we are embedding this value, it is also being wrapped in a set of
    // curly braces for JSX
// }
 
// const App = (props) => {
//     return (
//         <div>
//             <Title text="Title One" color="red" isImportant={true} />
//             <Title text="Title One" color="green" isImportant={false} />
//             <Title text="Title One" color="orange" isImportant={false} />
//         </div>
//     )
// }