/* eslint-disable react-hooks/exhaustive-deps */
import GlobalStyle from './Services/GlobalStyle';
import styled, {
  ThemeProvider,
} from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './Services/fetchData';
import { AnimatePresence } from 'framer-motion';
import { GameUpdateProvider } from './Services/Context';
import { BrowserRouter as Router } from 'react-router-dom';

import Game from './Pages/Game';
import Home from './Pages/Home';
import HighScore from './Pages/HighScore';
import Loading from './Modules/Loading/Loading';

function App() {
  const [gameData, setGameData] = useState([]);
  const [
    fetchInProgress,
    setFetchInProgress,
  ] = useState(true);

  const [mode, setMode] = useState('dark');

  useEffect(
    () =>
      fetchData()
        .then((data) => setGameData(data))
        .then(setLoading),
    []
  );

  function setLoading() {
    setFetchInProgress(!fetchInProgress);
  }

  return (
    <ThemeProvider theme={themes[mode]}>
      <GameUpdateProvider>
        <Router>
          <AppWrapper id="root">
            <GlobalStyle />
            {fetchInProgress ? (
              <Loading mode={mode} />
            ) : (
              <AnimatePresence>
                <Switch>
                  <Route exact path="/">
                    <Home
                      mode={mode}
                      setMode={setMode}
                    />
                  </Route>
                  <Route path="/game">
                    <Game
                      wordData={gameData[1]}
                      scoreData={gameData[0]}
                      mode={mode}
                    />
                  </Route>
                  <Route path="/highscore">
                    <HighScore
                      mode={mode}
                      scores={gameData[0]}
                    />
                  </Route>
                </Switch>
              </AnimatePresence>
            )}
          </AppWrapper>
        </Router>
      </GameUpdateProvider>
    </ThemeProvider>
  );
}

export default App;

//Set up for light and dark themes
const LightTheme = {
  fontColor: '#0B3142',
  colorBackground: '#F5EDF7',
  colorDarkButton: '#E9C1F0',
  colorVeryLightButton: '#FFFFFF',
  colorNavigation: '#EFDCF2',
  cardBackgroundColor: 'rgba(239, 220, 242, 0.7)',
};

const DarkTheme = {
  fontColor: '#fff',
  colorBackground: '#2C2972',
  colorDarkButton: '#6C24B4',
  colorLighterButton: '#a626b7',
  colorLightButton: '#b12dc3',
  colorVeryLightButton: '#dc45f0',
  colorNavigation: '#32A19E',
  cardBackgroundColor: 'rgba(255, 255, 255, 0.1)',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const AppWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.theme.colorBackground};
`;
