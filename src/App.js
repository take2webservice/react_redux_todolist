import React from 'react';
import Input from './comonents/Input';
import TodoList from './comonents/TodoList';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <React.Fragment>
        <h1>TODO LIST</h1>
        <Input/>
        <TodoList />
      </React.Fragment>
    );
  }
}

export default  App;
