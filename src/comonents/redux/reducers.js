import { combineReducers } from "redux";

const initialState = {
    todos: []
}

function todoReducer(oldState=initialState, action) {
    switch (action.type) {
        case 'todo/add': {
            const input = action.payload.input;
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
