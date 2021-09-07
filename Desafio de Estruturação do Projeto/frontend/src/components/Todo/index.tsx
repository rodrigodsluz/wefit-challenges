import React from 'react';

import { Container, TodoContainer } from './styles';
import Input from '../Input';

const Todo = (): JSX.Element => (
  <Container>
    <TodoContainer>
      <Input />
    </TodoContainer>
  </Container>
);

export default Todo;
