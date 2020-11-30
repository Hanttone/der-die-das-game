import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';

import Navigation from '../Components/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import WordCard from '../Components/WordCard/WordCard';
import Scores from '../Components/Scores/Scores';
import Lives from '../Components/Lives/Lives';
import TimerBar from '../Components/TimerBar/TimerBar';

export default function GamePage({ wordData }) {
  const [
    selectedWord,
    setSelectedWord,
  ] = useState('');
  const [
    correctAnswer,
    setCorrectAnswer,
  ] = useState('');
  const [
    displayAnswer,
    setDisplayAnswer,
  ] = useState(true);
  const [playerScore, setPlayerScore] = useState(
    0
  );
  const [playerLives, setPlayerLives] = useState(
    3
  );

  useEffect(() => randomWord(), []);

  function randomWord() {
    const randomNumber = Math.floor(
      Math.random() * wordData.length
    );
    const selectedWord =
      wordData[randomNumber].germanNoun;
    return setSelectedWord(selectedWord);
  }

  function handleClick(nounGender) {
    const index = wordData.findIndex(
      (word) => word.germanNoun === selectedWord
    );
    if (wordData[index].gender === nounGender) {
      setPlayerScore(playerScore + 5);
      randomWord();
    } else {
      const correctAnswer = nounGender;
      setCorrectAnswer(correctAnswer);
      setDisplayAnswer(false);
      randomWord();
      setPlayerLives(playerLives - 1);
      setTimeout(
        () => setDisplayAnswer(true),
        3000
      );
    }
  }

  return (
    <GameWrapper>
      <Navigation />
      <Header>Game</Header>
      <Scores
        myScore={playerScore}
        highScore="10000"></Scores>
      <Lives livesLeft={playerLives} />
      <TimerBar />
      {displayAnswer ? (
        <WordCard word={selectedWord} />
      ) : (
        <WordCard
          text="The correct answer is:"
          word={correctAnswer}
        />
      )}
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
