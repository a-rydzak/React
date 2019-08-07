import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {



  render() {
   
    return this.props.todos.map((todo) =>(
        <TodoItem key={todo.id} todoitem={todo} markComplete={this.props.markComplete}/>
      ));
  }
}

// We are using this as a catch saying that our Todos must contain an
// array and is required
Todos.PropTypes = {todos: PropTypes.array.isRequired}

export default Todos;
