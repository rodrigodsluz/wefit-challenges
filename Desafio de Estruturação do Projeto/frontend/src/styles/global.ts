import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: #E5E5E5;
    --color-box-bg: #FFFFFF;
    --color-button-bg: #40D9B8;
    --color-input-text: #909090;
    --color-list-item-text: #606060;
    --color-box-list-item-bg: #EEEEEE;
    --color-box-empty-list-bg: #F2F2F2;
    --color-box-empty-list-border: #CCCCCC;
  }

  * {
      font-family: "Roboto", sans-serif;

      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html, body, #root {
      height: 100vh;
      width: 100vw;
  }

  body {
      background-color: var(--color-bg);
  }

  #root {
      display: flex;
      align-items: center ;
      justify-content: center;
  }
`;

