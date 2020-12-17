import React from "react";
import { Container } from "react-bootstrap";

import TodoState from './store/Todo-State';

import Todo from './view/Todo'


const App = () => {
  return (
    <TodoState>
      <Container>
        <Todo />
      </Container>
    </TodoState>
  );
};

export default App;
