import React, { useRef, useEffect, useState } from 'react';
import { Container } from './styles';

const TodoEmptyList = (): JSX.Element => {
  const [listItem, setlistItem] = useState<string>('');
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    setlistItem(item);
  }, [itemRef]);

  return (
    <Container item={listItem} ref={itemRef}>
      <p>Nenhum item cadastrado</p>
    </Container>
  );
};

export default TodoEmptyList;
