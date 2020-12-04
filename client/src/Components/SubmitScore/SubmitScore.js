import styled from 'styled-components/macro';
import Button from '../Button/Button';

export default function SubmitScore() {
  function handleClick() {
    console.log('eellooo');
  }

  return (
    <HighScoreWrapper>
      <input type="text"></input>
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
  margin-top: 10vh;
`;
