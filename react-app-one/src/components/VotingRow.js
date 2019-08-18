import React from 'react'; // import the React library
import './VotingRow.css';

class VotingRow extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={ count:0, name:props.name,time: new Date().toLocaleTimeString()};
    }

// this is maybe where an ajax call occurs
    // componentWillMount(){
	// 	setTimeout(()=>{
    //         this.setState({time: new Date().toLocaleTimeString()})
            
	// 	}, 2000);
	// }
    // styles= {
    //     div: {
    //       display: block,
    //     },
    //     h2: {
    //         display: inline-block,
    //       },
    //     button: {
    //         display: inline-block,
    //       },
    //   };

    handleClick = () =>{
        this.setState((state) => (
            {count: state.count + 1 }
        ));
    }
    
    render(){
        return(
      
            <div className = "votingRow" >
               
                <h2 className = "votingElm">{this.state.count}</h2>
                <h2 className = "votingElm">{this.state.name}</h2>
                <button onClick={()=>this.handleClick()}  className = "votingBtn">+</button >
            </div>
        )    
    }
}


export default VotingRow;