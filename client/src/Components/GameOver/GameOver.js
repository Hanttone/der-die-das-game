import styled from 'styled-components/macro';
import { useSetPlayerLives } from '../../Services/Context';
import { useHistory } from 'react-router-dom';

import Button from '../Button/Button';
import Header from '../Header/Header';

export default function GameOver() {
  const history = useHistory();
  const setPlayerLives = useSetPlayerLives();
  function handleClick() {
    history.push('/');
  }
  return (
    <GameOverWrapper>
      <Header>Game Over!</Header>
      <Button
        width="80%"
        radius="28px"
        text="Replay"
        onPlayerClick={() => setPlayerLives(3)}
      />
      <Button
        width="80%"
        radius="28px"
        text="End game"
        onPlayerClick={handleClick}
      />
    </GameOverWrapper>
  );
}

const GameOverWrapper = styled.div`
  width: 80%;
  height: 50vh;
  background-color: hotpink;
`;
