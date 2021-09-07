import React from 'react';
import { Container } from './styles';
import TodoListItems from '../TodoListItem';
import TodoEmptyList from '../TodoEmptyList';

type Props = {
  todoItems: Array<string>;
  handleDeleteTodo: (value: string) => void;
};

const TodoList = ({ todoItems, handleDeleteTodo }: Props): JSX.Element => (
  <Container>
    {todoItems.length ? (
      <ul>
        {todoItems.map((todo, i) => (
          <TodoListItems
            handleDeleteTodo={handleDeleteTodo}
            todoItem={todo}
            key={i}
          />
        ))}
      </ul>
    ) : (
      <TodoEmptyList/>
    )}
  </Container>
);

export default TodoList;
