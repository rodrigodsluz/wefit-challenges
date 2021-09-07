import React, { useState } from 'react';
import addIcon from '../../assets/ic-add@2x.png';
import { InputContainer } from './styles';

const Input = (): JSX.Element => {
  const [userData, setUserData] = useState('');

  const handleUserData = e => setUserData(e.target.value);

  return (
    <InputContainer>
      <input placeholder="Digite" value={userData} onChange={handleUserData} />
      <button type="button">
        <img alt="Add" src={addIcon} />
      </button>
    </InputContainer>
  );
};

export default Input;
