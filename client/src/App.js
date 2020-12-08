import GlobalStyle from './Services/GlobalStyle';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './Services/fetchData';

import Game from './Pages/Game';
import Home from './Pages/Home';
import HighScore from './Pages/HighScore';
import { GameUpdateProvider } from './Services/Context';

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
    <GameUpdateProvider>
      <Switch>
        <AppWrapper>
          <GlobalStyle />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game
              wordData={gameData[1]}
              scoreData={gameData[0]}
            />
          </Route>
          <Route path="/highscore">
            <HighScore scoreData={gameData[0]} />
          </Route>
        </AppWrapper>
      </Switch>
    </GameUpdateProvider>
  );
}

export default App;

const AppWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #2c2972;
`;
