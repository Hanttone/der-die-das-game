import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './Services/fetchData';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { GameUpdateProvider } from './Services/Context';
import GlobalStyle from './Services/GlobalStyle';

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

  useEffect(
    () =>
      fetchData()
        .then((data) => setGameData(data))
        .then(setLoading),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  console.log(fetchInProgress);
  function setLoading() {
    setFetchInProgress(!fetchInProgress);
  }

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
    <GameUpdateProvider>
      <AnimatePresence>
        <Switch>
          <AppWrapper>
            <GlobalStyle />
            {fetchInProgress ? (
              <Loading />
            ) : (
              <>
                <Route exact path="/">
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}>
                    <Home />
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
                      scoreData={gameData[0]}
                    />
                  </motion.div>
                </Route>{' '}
              </>
            )}
          </AppWrapper>
        </Switch>
      </AnimatePresence>
    </GameUpdateProvider>
  );
}

export default App;

const AppWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #2c2972;
`;
