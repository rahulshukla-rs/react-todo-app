import React, { useReducer } from "react";

import TodoContext from './Todo-Context'
import {TodoReducer} from './Todo-Reducer'
import {TODORACTION} from './Todo-Action'

export default function TodoState(props) {
    
    const intialState = {
        todos: [],
    };

    const [state, dispatch] = useReducer(TodoReducer, intialState)

    // Add todo
    const addTodo = (todo) => {
        dispatch({
        type: TODORACTION.ADD_TODO,
        payload: todo,
        });
    };

    return (
        <TodoContext.Provider
            value={{
            todos: state.todos,
            addTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}
