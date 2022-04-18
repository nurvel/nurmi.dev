import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica Neue;
  }

  .section {
  min-height: 100vh;
  padding: 1em;
  // 
  /* display: flex;
  justify-content: center;
  align-items: center; */
  }

`;

export default GlobalStyle;
