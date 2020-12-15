/* eslint-disable react-hooks/exhaustive-deps */
import GlobalStyle from './Services/GlobalStyle';
import styled, {
  ThemeProvider,
} from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './Services/fetchData';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { GameUpdateProvider } from './Services/Context';

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

  const dataUrls = [
    'http://localhost:4000/api/scores',
    'http://localhost:4000/api/germannouns',
  ];

  useEffect(
    () =>
      fetchData(dataUrls)
        .then((data) => setGameData(data))
        .then(setLoading),
    []
  );

  function setLoading() {
    setFetchInProgress(!fetchInProgress);
  }

  //page animations for transitions
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '100vw',
      scale: 1,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: '-100vw',
      scale: 1.2,
    },
  };

  const pageTransition = {
    ease: 'anticipate',
  };

  return (
    <ThemeProvider theme={themes[mode]}>
      <GameUpdateProvider>
        <GlobalStyle />
        <AnimatePresence>
          <AppWrapper>
            {fetchInProgress ? (
              <Loading mode={mode} />
            ) : (
              <Switch>
                <Route exact path="/">
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}>
                    <Home
                      mode={mode}
                      setMode={setMode}
                    />
                  </motion.div>
                </Route>
                <Route path="/game">
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}>
                    <Game
                      wordData={gameData[1]}
                      scoreData={gameData[0]}
                      mode={mode}
                    />
                  </motion.div>
                </Route>
                <Route path="/highscore">
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}>
                    <HighScore
                      mode={mode}
                      scores={gameData[0]}
                    />
                  </motion.div>
                </Route>
              </Switch>
            )}
          </AppWrapper>
        </AnimatePresence>
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
