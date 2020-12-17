import React from "react";
import { Card } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AddNewTodo from "../components/AddNewTodo";
import TodoList from "../components/TodoList";


const Todo = () => {

  return (
    <Card className="text-center">
      <Card.Header>
        <Header />
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <AddNewTodo />
        </Card.Title>
        <Card.Text>
          <TodoList />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        <Footer />
      </Card.Footer>
    </Card>
  );
}

export default Todo