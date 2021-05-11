import React from 'react'
import store from './redux/store';
import { connect } from 'react-redux'
import { addTodo } from './redux/actions'

let todos

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    onInputChange = (e) => {
        this.setState({
          input: e.target.value,
        });
    }
    addToDo = (e) => {
        this.props.addTodo(this.state.input);
        this.setState({
            input: '',
        });
    }

    render(){
        return (
            <div>
                <input
                    onChange={this.onInputChange}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.addToDo}>
                    Add Todo
                </button>
            </div>
        );
    }
}
export default connect(null, { addTodo })(Input)