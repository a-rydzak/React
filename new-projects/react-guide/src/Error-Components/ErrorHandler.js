import React from 'react';
import { Component } from "react";

class ErrorHandler extends Component{
    
  
      state = { hasError: false , message:''};
  
    
      componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true, message:`${error}` });
        // You can also log the error to an error reporting service
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
        return (<div><h1>Something went wrong.</h1><h4>{this.state.message}</h4></div>);
        }
        return (this.props.children);
      }
    }

export default ErrorHandler;