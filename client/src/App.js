import GlobalStyle from './Services/GlobalStyle';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './Services/fetchData';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';

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
    ease: 'easeInOut',
  };

  return (
    <GameUpdateProvider>
      <AnimatePresence>
        <Switch>
          <AppWrapper>
            <GlobalStyle />
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
            </Route>
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
  //overflow-x: hidden;
`;
