import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { useSetPlayerLives } from '../../Services/Context';
import sortScore from '../../Services/sortScores';
import {
  usePlayerScore,
  useSetPlayerScore,
} from '../../Services/Context';
import PropTypes from 'prop-types';

import Button from '../../Components/Button/Button';
import Header from '../../Components/Header/Header';
import SubmitScore from '../../Components/SubmitScore/SubmitScore';

export default function GameOver({ scoreData }) {
  const sortedHighScores = sortScore(scoreData);
  const history = useHistory();
  const setPlayerLives = useSetPlayerLives();
  const playerScore = usePlayerScore();
  const setPlayerScore = useSetPlayerScore();

  function handleClick() {
    resetGame();
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

  function resetGame() {
    setPlayerLives(3);
    setPlayerScore(0);
  }

  return (
    <GameOverWrapper>
      <Header>Game Over</Header>
      {playerScoreIsHigher()}
      <ButtonWrapper>
        <Button
          width="80%"
          radius="28px"
          text="Replay"
          onPlayerClick={() => resetGame()}
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

const GameOverWrapper = styled.div`
  width: 80%;
  height: 90vh;
  z-index: 10;
  margin-top: 5vh;
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
