import styled from 'styled-components/macro';
import Button from '../Button/Button';
import Header from '../Header/Header';
import { useState } from 'react';

export default function SubmitScore({
  playerScore,
}) {
  const [
    isScoreSubmitted,
    setIsScoreSubmitted,
  ] = useState(false);
  const [playerInfo, setPlayerInfo] = useState({
    playerName: '',
    score: playerScore,
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    console.log(fieldValue);
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
    setIsScoreSubmitted(true);
  }

  return (
    <HighScoreWrapper>
      {isScoreSubmitted ? (
        <p>Your score was submitted</p>
      ) : (
        <>
          <Header>High Score!</Header>
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
  flex-wrap: wrap;
  gap: 2vh;
  margin-top: 5vh;
  margin-bottom: 10vh;

  label {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-size: 20px;
  }

  input {
    margin-top: 2vh;
    margin-bottom: 2vh;
    color: black;
    height: 6vh;
    border-radius: 28px;
    border: none;
    outline: none;
    text-align: center;
    font-size: 20px;
  }

  p {
    font-size: 1.2rem;
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
`;
