import React from 'react'

export default class Input extends React.Component {
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
        this.props.addToDo(this.state.input);
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