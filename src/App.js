import React from 'react'
import Input from './comonents/Input'
import TodoList from './comonents/TodoList';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
      ]
    }
  }

  addToDo = (input) => {
    this.setState(() => {
      return {
        todos: [
          ...this.state.todos,
          input,
        ]
      }
    });
  }

  render(){
    return (
      <React.Fragment>
        <h1>TODO LIST</h1>
        <Input addToDo={this.addToDo}/>
        <TodoList todos={this.state.todos}/>
      </React.Fragment>
    );
  }
}

export default  App;
