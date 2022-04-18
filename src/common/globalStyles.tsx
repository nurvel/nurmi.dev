import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }

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

  h1 {
    color: #ffffff;
    font-size: 5rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    text-shadow: 0.1em 0.1em 0 hsl(9000 50% 20%);
  }

  h2 {
    color: #ffffff;
    font-size: 4rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    text-shadow: 0.1em 0.1em 0 hsl(9000 50% 20%);
  }

  p {
    color: #ffffff;
    font-size: 1.5rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight:400;
  }

a:link,a:visited, a:active   {
  color: #be296a;
  text-decoration: none;
}

a:hover {
  color: #F92C85;
  text-decoration: none;
}

@media only screen and (max-width: 700px) {
  h1 {
    font-size: 2.5rem;
    text-shadow: 0.1em 0.1em 0 hsl(9000 50% 20%);
  }

  h2 {
    font-size: 2rem;
    text-shadow: 0.1em 0.1em 0 hsl(9000 50% 20%);
  }
  p {
    font-size: 1rem;
    font-weight:400;
  }
}



`;

export default GlobalStyle;
