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

  const pageAnimations = {
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
    type: 'spring',
    ease: 'easeInOut',
    stiffness: 300,
    damping: 25,
    duration: '0.15',
  };

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
                    <motion.div
                      key="home"
                      initial="initial"
                      animate="in"
                      exit="out"
                      transition={pageTransition}
                      variants={pageAnimations}>
                      <Home
                        mode={mode}
                        setMode={setMode}
                      />
                    </motion.div>
                  </Route>
                  <Route path="/game">
                    <motion.div
                      key="game"
                      initial="initial"
                      animate="in"
                      exit="out"
                      transition={pageTransition}
                      variants={pageAnimations}>
                      <Game
                        wordData={gameData[1]}
                        scoreData={gameData[0]}
                        mode={mode}
                      />
                    </motion.div>
                  </Route>
                  <Route path="/highscore">
                    <motion.div
                      key="highscore"
                      initial="initial"
                      animate="in"
                      exit="out"
                      transition={pageTransition}
                      variants={pageAnimations}>
                      <HighScore
                        mode={mode}
                        scores={gameData[0]}
                      />
                    </motion.div>
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
