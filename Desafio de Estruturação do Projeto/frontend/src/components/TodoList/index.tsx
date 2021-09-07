import React from 'react';
import { TodoListContainer } from './styles';
import TodoListItems from '../TodoListItem';

type Props = {
  todoItems: Array<string>;
  handleDeleteTodo: (value: string) => void;
};

const TodoList = ({ todoItems, handleDeleteTodo }: Props): JSX.Element => (
  <TodoListContainer>
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
      <div>eae</div>
    )}
  </TodoListContainer>
);

export default TodoList;
