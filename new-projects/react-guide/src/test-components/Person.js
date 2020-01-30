import React from 'react';
import {Component} from 'react';
import './person-css.js';
import StyledDiv from './person-css';

//  this is an example of a funtional component where state is not used
class Person extends Component{

    // http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    // UNCOMMONLY USED
    static getDericedStateFromProps(props, state){
        console.log('getDericedStateFromProps')
        return state;
    }

    // UNCOMMONLY USED
    shouldComponentUpdate(nextProps, nextState){
        //this only happens on change 
        
        if(nextProps.name != this.props.name){
            console.log('shouldComponentUpdate')
            return true;
        }
        return false;
            
    }
    //This will be a safer alternative to the previous lifecycle method componentWillUpdate()
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate')
        return {name:this.props.name};
    }

    //  componentDidUpdate() method is updating the DOM in response to prop or state changes.
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot)
        // a package from getSnapshotBeforeUpdate
        console.log('componentDidUpdate')

         //Typical usage, don't forget to compare the props
        // if (this.props.userName !== prevProps.userName) {
        //     this.fetchData(this.props.userName);
        // }
    }
    
    // called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.
    // allows the use of setState() !! The best practice is to ensure that your states are assigned in the constructor(). 
    componentDidMount(){console.log('Component Did Mount')}

    /*
        // This is how you would throw some errors
        if(Math.random() > .2){
            throw new Error('Random Error Occuring')
        }
    */
    //  called just before the component is unmounted and destroyed. If there are any cleanup actions that you would need to do, this would be the right spot
   componentWillUnmount() { //You cannot modify the component state
    window.removeEventListener('resize', this.resizeListener)
   }
   //A render() method has to be pure with no side-effects, you can not setState() within a render()
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
