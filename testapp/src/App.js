import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {

  state={todos:[{id:0 ,title:'Scratch the Bunyip', completed:false},
                {id:1 ,title:'Feed the Bunyip', completed:false},
                {id:2 ,title:'Pet the Bunyip', completed:false}]}

  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{

      if(todo.id === id){

        todo.completed = !todo.completed 
      }
      return todo
    })})

  }

  render() {
    // this is jsx, react javascript
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Todos todos={this.state.todos} markComplete ={this.markComplete}/>
        </header>

      </div>
    );
  }
}

export default App;
