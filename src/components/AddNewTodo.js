import React, { useState, useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import TodoContext from "../store/Todo-Context";

const AddNewTodo = () => {
  const [name, setName] = useState("");
  const { addTodo } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(newTodo(name));
    setName("");
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formBasicEmail">
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Add New Todo.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
        <Col sm="2">
          <Button variant="primary" onClick={handleSubmit}>
            Add New
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default AddNewTodo;
