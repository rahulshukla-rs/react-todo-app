import React,{ useContext } from 'react'
import TodoContext from '../store/Todo-Context'

const Footer = () => {
    const { todos } = useContext(TodoContext);
    return (
        <div>
            Total Number of Todos: {todos.length}
        </div>
    )
}

export default Footer
