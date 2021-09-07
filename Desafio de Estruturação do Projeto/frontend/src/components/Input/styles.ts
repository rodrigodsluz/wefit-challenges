import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  input {
    font-size: 16px;
    color: var(--color-input-tex);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    height: 48px;
    width: 288px;
    margin-right: 16px;
    padding: 16px;
    border-radius: 2px;
    border: none;
    outline: none;
  }

  button {
    padding: 12px;
    border-radius: 100%;
    background-color: var(--color-button-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    outline: none;

    img {
      height: 24px;
      width: 24px;
    }
  }
`;
