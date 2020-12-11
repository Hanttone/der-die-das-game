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
import Ripples from 'react-ripples';

import Navigation from '../Modules/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import WordCard from '../Components/WordCard/WordCard';
import Scores from '../Components/Scores/Scores';
import Lives from '../Components/Lives/Lives';
import TimerBar from '../Components/TimerBar/TimerBar';
import GameOver from '../Modules/GameOver/GameOver';

export default function GamePage({
  wordData,
  scoreData,
  mode,
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

  function handleClick(nounGender) {
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
      <Navigation mode={mode} />
      {playerLives === 0 ? (
        displayGameOver()
      ) : (
        <>
          <Header mt="2.5vh" mb="4vh">
            Game
          </Header>
          <Scores
            myScore={playerScore}
            highScore={scoreData}></Scores>
          <Lives mode={mode} />
          <TimerBar
            word={selectedWord}></TimerBar>
          {isAnswerDisplayed ? (
            <WordCard word={selectedWord} />
          ) : (
            <WordCard
              text="The correct answer is:"
              word={correctAnswer}
            />
          )}
          <ButtonWrapper>
            <div>
              <Ripples during={1200}>
                <Button
                  width="100%"
                  radius="20px"
                  text="Der"
                  zindex="1"
                  onPlayerClick={() =>
                    handleClick('der')
                  }
                  disabled={!isAnswerDisplayed}
                />
              </Ripples>
            </div>
            <div>
              <Ripples during={1200}>
                <Button
                  width="100%"
                  radius="20px"
                  text="Die"
                  zindex="1"
                  onPlayerClick={() =>
                    handleClick('die')
                  }
                  disabled={!isAnswerDisplayed}
                />
              </Ripples>
            </div>
            <div>
              <Ripples during={1200}>
                <Button
                  width="100%"
                  radius="20px"
                  text="Das"
                  zindex="1"
                  onPlayerClick={() =>
                    handleClick('das')
                  }
                  disabled={!isAnswerDisplayed}
                />
              </Ripples>
            </div>
          </ButtonWrapper>{' '}
        </>
      )}
      <WaveDesignBackground mode={mode} />
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
  bottom: 8%;
  z-index: 1;

  div {
    overflow: hidden;
    border-radius: 20px;
    width: 100%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`;
