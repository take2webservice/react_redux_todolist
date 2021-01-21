import React from 'react'
import Todo from './Todo'
import store from './redux/store';



export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    componentDidMount(){
        store.subscribe(this.handleChange);
    }
    todos = []
    handleChange = () => {
        let oldTodos = this.todos;
        this.todos = store.getState().todoReducer.todos;
        if (JSON.stringify(oldTodos) !== JSON.stringify(this.todos)) {
            this.setState({
                todos: this.todos
            });
        }
    }
    render(){
        const todos = store.getState().todoReducer.todos;
        return (
            <ul className="todo-list">
                {this.state.todos.length === 0 ?
                    <span>please input new todo</span> :
                    this.state.todos.map(e => {
                        return <Todo todo={e} />
                    })
                }
            </ul>
        )
    }
}