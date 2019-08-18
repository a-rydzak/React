// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';

import React, {Component} from 'react';
import Animal from './components/Animal';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      message:""
    }
  }

  pet = (text)=>{
    // const newMessage = `This is the text: ${text}`;
    this.setState({message:text})
  }

  render(){
    return(
      <div className="container">
        <h1>Petting Zoo! {this.state.message}</h1>
        <div className="jumbotron">
          <Animal name="Horse" onPetAnimal={this.pet}/>
          <Animal name="Goat" onPetAnimal={this.pet}/>
          <Animal name="Sheep" onPetAnimal={this.pet}/>
          <Animal name="Mouse" onPetAnimal={this.pet}/>
        </div>
      </div>
    )
  }
}

export default App;