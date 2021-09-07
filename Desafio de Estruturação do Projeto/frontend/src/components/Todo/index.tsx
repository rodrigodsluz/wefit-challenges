import React, { useState } from 'react';

import { Container, TodoContainer } from './styles';
import Input from '../Input';
import TodoList from '../TodoList';

const Todo = (): JSX.Element => {
  const [todoItems, setTodoItems] = useState<Array<string>>([]);

  const handleSetTodo = value => {
    setTodoItems([...todoItems, value]);
  };

  const handleDeleteTodo = (item) => {
    const updatedTodoItems = todoItems.filter(value => value !== item);
    setTodoItems(updatedTodoItems);
  };

  return (
    <Container>
      <TodoContainer>
        <Input handleSetTodo={handleSetTodo} />
        <TodoList todoItems={todoItems} handleDeleteTodo={handleDeleteTodo} />
      </TodoContainer>
    </Container>
  );
};

export default Todo;
