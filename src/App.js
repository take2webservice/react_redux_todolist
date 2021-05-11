import React from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './components/redux/store';

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
