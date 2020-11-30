import GlobalStyle from './Services/GlobalStyle';
import styled from 'styled-components/macro';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './Services/fetchData';

import Game from './Pages/Game';
import Home from './Pages/Home';
import HighScore from './Pages/HighScore';

function App() {
  const [gameData, setGameData] = useState([]);

  useEffect(
    () =>
      fetchData().then((data) =>
        setGameData(data)
      ),
    []
  );

  return (
    <Router>
      <Switch>
        <AppWrapper>
          <GlobalStyle />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game wordData={gameData[1]} />
          </Route>
          <Route path="/highscore">
            <HighScore />
          </Route>
        </AppWrapper>
      </Switch>
    </Router>
  );
}

export default App;

const AppWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #2c2972;
`;
