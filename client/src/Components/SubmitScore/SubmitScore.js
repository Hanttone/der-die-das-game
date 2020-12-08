import styled from 'styled-components/macro';
import Button from '../Button/Button';
import Header from '../Header/Header';

export default function SubmitScore({
  playerScore,
}) {
  function handleClick() {
    console.log('eellooo');
  }

  return (
    <HighScoreWrapper>
      <Header>High Score!</Header>
      <Header>{playerScore}</Header>
      <label htmlFor="playerName">
        {' '}
        Enter your player name:
        <input
          type="text"
          name="playerName"
          id="playerName"
        />
      </label>
      <Button
        width="80%"
        radius="28px"
        text="Submit"
        onPlayerClick={handleClick}></Button>
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
`;
