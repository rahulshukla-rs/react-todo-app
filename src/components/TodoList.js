import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";

import TodoContext from "../store/Todo-Context";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ListGroup>
      {todos.map((todo) => {
        return <ListGroup.Item key={todo.id}>{todo.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}