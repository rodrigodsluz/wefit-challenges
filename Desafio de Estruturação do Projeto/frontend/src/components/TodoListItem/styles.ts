import styled, { css } from 'styled-components';

interface Props {
  item: string;
}

export const Container = styled.li<Props>`
  background: var(--color-box-list-item-bg);
  color: var(--color-list-item-text);
  height: 32px;
  font-size: 14px;
  margin-bottom: 8px;
  padding: 8px 16px;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: translateY(25%);

  ${props =>
    props.item &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
  }

  img {
    height: 16px;
    width: 12px;
  }
`;
