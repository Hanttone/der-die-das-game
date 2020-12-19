/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './Services/fetchData';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import AppThemeProvider from './Services/AppThemeProvider';

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
    <AppThemeProvider mode={mode}>
      <AppWrapper>
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
    </AppThemeProvider>
  );
}

export default App;

//Set up for light and dark themes

const AppWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.theme.colorBackground};
`;
