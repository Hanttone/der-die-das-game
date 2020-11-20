import GlobalStyle from "./Services/GlobalStyle"
import styled from "styled-components/macro"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Game from "./Pages/Game"
import Home from "./Pages/Home"
import HighScore from "./Pages/HighScore"


function App() {
  return (
    <Router>
      <Switch>
        <AppWrapper>
          <GlobalStyle></GlobalStyle>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/game">
            <Game></Game>
          </Route>
          <Route path="/highscore">
            <HighScore></HighScore>
          </Route>
        </AppWrapper>
      </Switch>
    </Router>
  );
}

export default App;

const AppWrapper = styled.section`
background-color: #2C2972;
width: 100%;
height: 100vh;
`;
