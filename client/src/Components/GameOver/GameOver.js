import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { useSetPlayerLives } from '../../Services/Context';
import sortScore from '../../Services/sortScores';
import { useState } from 'react';

import Button from '../Button/Button';
import Header from '../Header/Header';
import SubmitScore from '../SubmitScore/SubmitScore';

export default function GameOver({
  scoreData,
  playerScore,
}) {
  const sortedHighScores = sortScore(scoreData);
  const history = useHistory();
  const setPlayerLives = useSetPlayerLives();
  function handleClick() {
    setPlayerLives(3);
    history.push('/');
  }
  const [
    isPlayerScoreHigher,
    setIsPlayerScoreHigher,
  ] = useState(false);

  if (typeof sortedHighScores[9] === undefined) {
    setIsPlayerScoreHigher(true);
    console.log(isPlayerScoreHigher);
  }
  console.log(playerScore, sortedHighScores[9]);

  return (
    <GameOverWrapper>
      <Header>Game Over</Header>
      {isPlayerScoreHigher && <SubmitScore />}
      <ButtonWrapper>
        <Button
          width="80%"
          radius="28px"
          text="Replay"
          onPlayerClick={() =>
            setPlayerLives(3)
          }></Button>
        <Button
          width="80%"
          radius="28px"
          text="End game"
          onPlayerClick={handleClick}></Button>
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
