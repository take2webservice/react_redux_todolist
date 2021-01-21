import {ADD_TODO} from './actionTypes';

export const addTodo = input => ({
    type: ADD_TODO,
    palyoad: {
        input
    },
})