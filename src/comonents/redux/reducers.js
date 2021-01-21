import { combineReducers } from "redux";
import { ADD_TODO } from './actionTypes';

const initialState = {
    todos: []
}

function todoReducer(oldState=initialState, action) {
    console.log(action);
    switch (action.type) {
        case ADD_TODO: {
            const input = action.palyoad.input;
            return {
                todos: [
                    input,
                    ...oldState.todos,
                ]
            };
        }
        default: {
            return oldState;
        }
    }

}

export default combineReducers({ todoReducer });
