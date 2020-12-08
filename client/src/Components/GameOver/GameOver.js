import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { useSetPlayerLives } from '../../Services/Context';
import sortScore from '../../Services/sortScores';
import {
  usePlayerScore,
  useSetPlayerScore,
} from '../../Services/Context';

import Button from '../Button/Button';
import Header from '../Header/Header';
import SubmitScore from '../SubmitScore/SubmitScore';

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
        playerScore > sortedHighScores[0].score ||
        sortedHighScores[9] === undefined
      ) {
        return (
          <SubmitScore
            playerScore={playerScore}
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

const GameOverWrapper = styled.div`
  width: 80%;
  height: 50vh;
  z-index: 10;
  margin-top: 5vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2vh;
  margin-top: 10vh;
`;
