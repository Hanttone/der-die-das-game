import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: sans-serif;
}

body {
    width: 100%;
    height: 100vh;
}
`;