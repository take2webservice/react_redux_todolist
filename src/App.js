import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
        'hoge',
        'fuga',
        'boke'
      ],
      input: ''
    }
  }

  onInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  addToDo = (e) => {
    this.setState(() => {
      return {
        todos: [
          ...this.state.todos,
          this.state.input,
        ],
        input: ''
      }
    });
  }

  render(){
    return (
      <React.Fragment>
        <h1>TODO LIST</h1>
        <div>
          <input
            onChange={this.onInputChange}
            value={this.state.input}
          />
          <button className="add-todo" onClick={this.addToDo}>
            Add Todo
          </button>
        </div>
        <ul className="todo-list">
          {this.state.todos.map(e => {
            return <li className="todo-item">
                     <span>
                       {e}
                     </span>
                   </li>
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default  App;
