import styled from 'styled-components/macro';

import Navigation from '../Components/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import WordCard from '../Components/WordCard/WordCard';
import Scores from '../Components/Scores/Scores';
import Lives from '../Components/Lives/Lives';
import TimerBar from '../Components/TimerBar/TimerBar';

export default function GamePage({ wordData }) {
  const randomIndex = Math.floor(
    Math.random() * wordData.length
  );

  function randomWord() {
    const wordToShow =
      wordData[randomIndex].germanNoun;

    return wordToShow;
  }

  function handleClick(nounGender) {
    if (
      wordData[randomIndex].gender === nounGender
    ) {
      console.log('you guessed correct');
    } else {
      console.log('sorry you guessed wrong');
      randomWord();
    }
  }

  return (
    <GameWrapper>
      <Navigation />
      <Header>Game</Header>
      <Scores
        myScore="100"
        highScore="10000"></Scores>
      <Lives />
      <TimerBar />
      <WordCard word={randomWord()} />
      <ButtonWrapper>
        <Button
          width="100%"
          radius="20px"
          text="Der"
          zindex="1"
          onPlayerClick={() =>
            handleClick('der')
          }></Button>
        <Button
          width="100%"
          radius="20px"
          text="Die"
          zindex="1"
          onPlayerClick={() =>
            handleClick('die')
          }></Button>
        <Button
          width="100%"
          radius="20px"
          text="Das"
          zindex="1"
          onPlayerClick={() =>
            handleClick('das')
          }></Button>
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
