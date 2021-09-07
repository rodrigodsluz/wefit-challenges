import React from 'react';
import { GlobalStyle } from './styles/global';
import Todo from './components/Todo';

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Todo/>
  </>
);

export default App;
