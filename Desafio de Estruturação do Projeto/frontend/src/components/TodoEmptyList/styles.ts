import styled, { css } from 'styled-components';

interface Props {
  item: string;
}

export const TodoEmptyListContainer = styled.div<Props>`
  background: var(--color-box-empty-list-bg);
  border: 1px dashed var(--color-box-empty-list-border);
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(25%);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

  ${props =>
    props.item &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  p {
    color: var(--color-list-item-text);
    font-size: 12px;
  }
`;
