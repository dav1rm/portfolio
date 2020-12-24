import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /*
  * Reset default styles of html
  */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: #212121;
    color: #F2F2F2;
    -webkit-font-smoothing: antialiased;
    font-family: 'Fira Code', monospace;
  }

  body, input, textarea, button {
    font-size: 16px;
  }

  button, a {
    cursor: pointer;
  }
`;
