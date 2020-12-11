import styled from 'styled-components/macro';
import { useState } from 'react';
import {
  useNewHighScore,
  useSetNewHighScore,
} from '../../Services/Context';

import Button from '../Button/Button';
import Header from '../Header/Header';

export default function SubmitScore({
  playerScore,
  scoreData,
}) {
  const [
    isScoreSubmitted,
    setIsScoreSubmitted,
  ] = useState(false);
  const [playerInfo, setPlayerInfo] = useState({
    playerName: '',
    score: playerScore,
  });
  const newHighScore = useNewHighScore();
  const setNewHighScore = useSetNewHighScore();

  function handleChange(event) {
    const fieldValue = event.target.value;
    setPlayerInfo({
      ...playerInfo,
      [event.target.name]: fieldValue,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:4000/api/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerInfo),
    })
      .then((data) => data.json())
      .then((createdUser) =>
        console.log(createdUser, 'CREATED')
      )
      .catch((error) => console.error(error));
    setNewHighScore((newHighScore) => [
      ...scoreData,
      playerInfo,
    ]);
    console.log(newHighScore);
    setIsScoreSubmitted(true);
  }

  return (
    <HighScoreWrapper>
      {isScoreSubmitted ? (
        <p>Your score was submitted</p>
      ) : (
        <>
          <Header mt="5vh">High Score!</Header>
          <Header>{playerScore}</Header>
          <label htmlFor="playerName">
            {' '}
            Enter your player name:
            <input
              type="text"
              name="playerName"
              id="playerName"
              onChange={handleChange}
              value={playerInfo.playerName}
            />
          </label>
          <Button
            width="80%"
            radius="28px"
            text="Submit"
            onPlayerClick={onSubmit}
          />{' '}
        </>
      )}
    </HighScoreWrapper>
  );
}

const HighScoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2vh;
  margin-bottom: 2vh;

  label {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
  }

  input {
    margin-top: 2vh;
    margin-bottom: 1vh;
    color: black;
    height: 8vh;
    border-radius: 28px;
    border: none;
    outline: none;
    text-align: center;
    font-size: 1.25rem;
  }

  p {
    font-size: 1.2rem;
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    margin-top: 25vh;
    margin-bottom: 20vh;
  }
`;
