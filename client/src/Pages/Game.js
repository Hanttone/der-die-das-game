import styled from 'styled-components/macro';

import Navigation from '../Components/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import WordCard from '../Components/WordCard/WordCard';
import Scores from '../Components/Scores/Scores';
import Lives from '../Components/Lives/Lives';
import TimerBar from '../Components/TimerBar/TimerBar';

export default function GamePage() {
  return (
    <GameWrapper>
      <Navigation />
      <Header>Game</Header>
      <Scores
        myScore="100"
        highScore="10000"></Scores>
      <Lives />
      <TimerBar />
      <WordCard word="Stuhl" />
      <ButtonWrapper>
        <Button
          width="100%"
          radius="20px"
          text="Der"
          zindex="1"></Button>
        <Button
          width="100%"
          radius="20px"
          text="Die"
          zindex="1"></Button>
        <Button
          width="100%"
          radius="20px"
          text="Das"
          zindex="1"></Button>
      </ButtonWrapper>
      <WaveDesignBackground />
    </GameWrapper>
  );
}

const GameWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ButtonWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3%;
  position: absolute;
  bottom: 60px;
  z-index: 1;
`;
