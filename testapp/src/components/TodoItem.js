import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {


  getStyle = () => {
 	return {background: '#f4f4f4',
 			padding: '10px',
 			borderBottom: '1px #ccc dotted',
 		    textDecoration: this.props.todoitem.completed ? 'line-through':'none'}
  }

  

  render() {

  	const {id, title} = this.props.todoitem;
    return (
    	<div style={this.getStyle()}>

    		<p>
        // Here we get into component drilling
    			<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
    			{this.props.todoitem.title}
    		</p>
    	</div>
    )
  }
}


TodoItem.PropTypes = {todo: PropTypes.object.isRequired}
export default TodoItem;
