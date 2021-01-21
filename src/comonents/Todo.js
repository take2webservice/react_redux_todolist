import React from 'react'
export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <li className="todo-item">
                <span>
                {this.props.todo}
                </span>
            </li>
        )
    }
}