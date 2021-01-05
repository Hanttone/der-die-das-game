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
import {
  pageTransition,
  pageAnimations,
} from './Services/pageTransitionVariables';

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
    <AppThemeProvider mode={mode}>
      <BackDrop>
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
      </BackDrop>
    </AppThemeProvider>
  );
}

export default App;

const BackDrop = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: ${(props) =>
    props.theme.colorBackground};
`;

const AppWrapper = styled.section`
  width: 100%;
  min-width: 360px;
  max-width: 800px;
  height: 100vh;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  background-color: ${(props) =>
    props.theme.colorBackground};
`;
