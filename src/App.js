import GlobalStyle from "./Services/GlobalStyle"
import styled from "styled-components/macro"
import Game from "./Pages/Game"



function App() {
  return (

    <AppWrapper>
      <GlobalStyle></GlobalStyle>
      <Game></Game>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.section`
background-color: #2C2972;
width: 100%;
height: 100vh;
`;
