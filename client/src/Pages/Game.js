/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import {
  usePlayerLives,
  useCounter,
  useSetCounter,
  useLife,
  usePlayerScore,
  useSetPlayerScore,
} from '../Services/Context';

import Navigation from '../Components/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import WordCard from '../Components/WordCard/WordCard';
import Scores from '../Components/Scores/Scores';
import Lives from '../Components/Lives/Lives';
import TimerBar from '../Components/TimerBar/TimerBar';
import GameOver from '../Components/GameOver/GameOver';

export default function GamePage({
  wordData,
  scoreData,
}) {
  const [
    selectedWord,
    setSelectedWord,
  ] = useState('');
  const [
    correctAnswer,
    setCorrectAnswer,
  ] = useState('');
  const [
    isAnswerDisplayed,
    setIsAnswerDisplayed,
  ] = useState(true);
  /*const [playerScore, setPlayerScore] = useState(
    0
  );*/
  const playerScore = usePlayerScore();
  const setPlayerScore = useSetPlayerScore();
  const setPlayerLives = usePlayerLives();
  const counter = useCounter();
  const setCounter = useSetCounter();
  const playerLives = useLife();

  useEffect(() => randomWord(), []);
  useEffect(() => timeIsOut(), [counter]);

  function randomWord() {
    const randomNumber = Math.floor(
      Math.random() * wordData.length
    );
    const wordSelected =
      wordData[randomNumber].germanNoun;
    return setSelectedWord(wordSelected);
  }

  function timeIsOut() {
    const index = wordData.findIndex(
      (word) => word.germanNoun === selectedWord
    );
    if (counter === 0) {
      setCounter(null);
      const correctAnswer =
        wordData[index].gender;
      setCorrectAnswer(correctAnswer);
      setIsAnswerDisplayed(false);
      setPlayerLives(1);
      setTimeout(() => {
        setIsAnswerDisplayed(true);
        randomWord();
      }, 2000);
    }
  }

  function handleCorrectAnswer(nounGender) {
    const index = wordData.findIndex(
      (word) => word.germanNoun === selectedWord
    );
    if (wordData[index].gender === nounGender) {
      setPlayerScore(playerScore + 5);
      randomWord();
    } else if (
      wordData[index].gender !== nounGender
    ) {
      setCounter(null);
      const correctAnswer =
        wordData[index].gender;
      setCorrectAnswer(correctAnswer);
      setIsAnswerDisplayed(false);
      setPlayerLives(1);
      setTimeout(() => {
        setIsAnswerDisplayed(true);
        randomWord();
      }, 2000);
    } else {
      console.log('oops error');
    }
  }

  function displayGameOver() {
    setTimeout(() => {
      setIsAnswerDisplayed(true);
    }, 3000);
    return <GameOver scoreData={scoreData} />;
  }

  return (
    <GameWrapper>
      <Navigation />
      {playerLives === 0 ? (
        displayGameOver()
      ) : (
        <>
          <Header>Game</Header>
          <Scores
            myScore={playerScore}
            highScore={scoreData}
          />
          <Lives />
          <TimerBar word={selectedWord} />
          {isAnswerDisplayed ? (
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
              text="der"
              zindex="1"
              onPlayerClick={() =>
                handleCorrectAnswer('der')
              }
              disabled={!isAnswerDisplayed}
            />
            <Button
              width="100%"
              radius="20px"
              text="die"
              zindex="1"
              onPlayerClick={() =>
                handleCorrectAnswer('die')
              }
              disabled={!isAnswerDisplayed}
            />
            <Button
              width="100%"
              radius="20px"
              text="das"
              zindex="1"
              onPlayerClick={() =>
                handleCorrectAnswer('das')
              }
              disabled={
                !isAnswerDisplayed
              } />
          </ButtonWrapper>{' '}
        </>
      )}
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
