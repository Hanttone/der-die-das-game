import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: Silom;
    font-weight: regular;
    color: white;
}

body {
    width: 100%;
    height: 100vh;
}

h1 {
    font-size: 2.5rem;
}

p {
    font-family: Roboto;
    font-size: 1.25rem;
  }
`;
