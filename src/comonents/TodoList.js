import React from 'react'
import Todo from './Todo'
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <ul className="todo-list">
                {this.props.todos.length === 0 ?
                    <span>please input new todo</span> :
                    this.props.todos.map(e => {
                        return <Todo todo={e} />
                    })
                }
            </ul>
        )
    }
}