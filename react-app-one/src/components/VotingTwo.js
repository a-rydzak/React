            //---For web Sockets
// import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket('ws://127.0.0.1:8000');


  // componentWillMount() {
  //   client.onopen = () => {
  //    console.log('WebSocket Client Connected');
  //   };
  //   client.onmessage = (message) => {
  //     const dataFromServer = JSON.parse(message.data);
  //     const stateToChange = {};
  //     if (dataFromServer.type === "userevent") {
  //       stateToChange.currentUsers = Object.values(dataFromServer.data.users);
  //     } else if (dataFromServer.type === "contentchange") {
  //       stateToChange.text = dataFromServer.data.editorContent || contentDefaultMessage;
  //     }
  //     stateToChange.userActivity = dataFromServer.data.userActivity;
  //     this.setState({
  //       ...stateToChange
  //     });
  //   };
  // }

  
  import React from 'react'; // import the React library
  import VotingRow from './VotingRow';

  class VotingTwo extends React.Component{
    constructor(props){
        super(props);
        this.state={ time: new Date().toLocaleTimeString()};
    }
  
  componentDidMount() {
      this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
  }
  // clear the timer when the component unmounts to prevent it leaving errors and leaking memory
  componentWillUnmount() {
      clearInterval(this.interval);
  }

  render(){
        return(
                  <div className="votingCtn">
                    <h1>Petting Zoo! </h1>
                    <h1>{this.state.time}</h1>
                    <VotingRow name="Horse"/>
                    <VotingRow name="Goat"/>
                    <VotingRow name="Sheep"/>
                    <VotingRow name="Mouse"/>
                  </div>
              )    
            }
}

export default VotingTwo;


