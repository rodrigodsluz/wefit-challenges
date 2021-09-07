import React, { useState } from 'react';
import addIcon from '../../assets/ic-add@2x.png';
import { InputContainer } from './styles';

type Props = {
  handleSetTodo: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ handleSetTodo }: Props): JSX.Element => {
  const [userData, setUserData] = useState<string>('');

  const handleUserData = e => setUserData(e.target.value);

  const handleAddNewTodo = () => {
    if (userData !== '') {
      handleSetTodo(userData);
    }
    setUserData('');
  };

  return (
    <InputContainer>
      <input placeholder="Digite" value={userData} onChange={handleUserData} />
      <button type="button" onClick={handleAddNewTodo}>
        <img alt="Add" src={addIcon} />
      </button>
    </InputContainer>
  );
};

export default Input;
