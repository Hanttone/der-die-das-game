import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

import { useHistory } from 'react-router-dom';
import sortScore from 'Services/sortScores';
import {
  usePlayerScore,
  useResetGame,
} from 'Services/Context';
import PropTypes from 'prop-types';
import {
  pageAnimations,
  pageTransition,
} from 'Services/pageTransitionVariables';

import Button from 'Components/Button/Button';
import Header from 'Components/Header/Header';
import SubmitScore from 'Modules/SubmitScore/SubmitScore';

export default function GameOver({ scoreData }) {
  const sortedHighScores = sortScore(scoreData);
  const history = useHistory();
  const playerScore = usePlayerScore();
  const resetGame = useResetGame();

  function handleClick() {
    resetGame(3, 0);
    history.push('/');
  }

  function playerScoreIsHigher() {
    if (playerScore !== 0) {
      if (
        sortedHighScores[9] === undefined ||
        playerScore > sortedHighScores[9].score
      ) {
        return (
          <SubmitScore
            playerScore={playerScore}
            scoreData={scoreData}
          />
        );
      }
    }
  }

  return (
    <GameOverWrapper
      key="gameover"
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageAnimations}>
      <Header>Game Over</Header>
      {playerScoreIsHigher()}
      <ButtonWrapper>
        <Button
          width="80%"
          radius="28px"
          text="Replay"
          onPlayerClick={() => resetGame(3, 0)}
        />
        <Button
          width="80%"
          radius="28px"
          text="End game"
          onPlayerClick={handleClick}
        />
      </ButtonWrapper>
    </GameOverWrapper>
  );
}

GameOver.propTypes = {
  scoreData: PropTypes.array,
};

const GameOverWrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  z-index: 10;
  margin-top: 5vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1vh;
  width: 100%;
  position: absolute;
  bottom: 4vh;
`;
