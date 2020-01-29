import React from 'react';
import {Component} from 'react';
import './person-css.js';
import StyledDiv from './person-css';

//  this is an example of a funtional component where state is not used
class Person extends Component{

    static getDericedStateFromProps(props, state){
        console.log('getDericedStateFromProps')
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        //this only happens on change 
        
        if(nextProps.name != this.props.name){
            console.log('shouldComponentUpdate')
            return true;
        }
        return false;
            
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate')
        return {name:this.props.name};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot)
        // a package from getSnapshotBeforeUpdate
        console.log('componentDidUpdate')
    }

    componentDidMount(){console.log('Component Did Mount')}
    /*
        // This is how you would throw some errors
        if(Math.random() > .2){
            throw new Error('Random Error Occuring')
        }
    */
    render(){
        return (
            <StyledDiv>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <button onClick={() => this.props.delete(this.props.index)}>Delete Me</button>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </StyledDiv>
        )
    }
};

export default Person;





// const person = ( props ) => {

//     /*
//         // This is how you would throw some errors
//         if(Math.random() > .2){
//             throw new Error('Random Error Occuring')
//         }
//     */
 
//     return (
//         <StyledDiv>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <button onClick={() => props.delete(props.index)}>Delete Me</button>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </StyledDiv>
//     )
// };

// export default person;
