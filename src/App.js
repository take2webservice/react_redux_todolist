import React from 'react';
import Input from './comonents/Input';
import TodoList from './comonents/TodoList';
import { Provider } from 'react-redux';
import store from './comonents/redux/store';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Provider store={store}>
        <h1>TODO LIST</h1>
        <Input/>
        <TodoList />
      </Provider>
    );
  }
}

export default  App;
