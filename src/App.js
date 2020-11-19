import GlobalStyle from "./Services/GlobalStyle"
import styled from "styled-components/macro"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Game from "./Pages/Game"
import Home from "./Pages/Home"

 


function App() {
  return (
    <Router>
      <Switch>
        <AppWrapper>
          <GlobalStyle></GlobalStyle>
          <Route exact path="/game">
            <Home></Home>
          </Route>
          <Route exact path="/game">
            <Game></Game>
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
