import styled from 'styled-components/macro';
import Button from '../Button/Button';
import Header from '../Header/Header';
import SubmitScore from '../SubmitScore/SubmitScore';
import { useSetPlayerLives } from '../../Services/Context';
import { useHistory } from 'react-router-dom';

export default function GameOver() {
  const history = useHistory();
  const setPlayerLives = useSetPlayerLives();
  function handleClick() {
    setPlayerLives(3);
    history.push('/');
  }
  return (
    <GameOverWrapper>
      <Header>Game Over</Header>
      <SubmitScore />
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
