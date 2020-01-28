import React from 'react';
import { Component } from "react";

class ErrorHandler extends Component{
    
    state = {
        hasError:false,
        errorMessage:''
    }

    componentDidCatch = (error, info) =>{
        this.setState({hasError:true, errorMessage:error});
    }

    render() {
        if(this.state.hasError){
        return <h1>{this.state.errorMessage}</h1>
        }else{
            // The children is what we wrap inside the error boundry
            return this.props.children
        }
        
    }

}

export default  ErrorHandler;