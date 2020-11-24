import styled from 'styled-components/macro';

export default function Scores({
  myScore,
  highScore,
}) {
  return (
    <ScoreWrapper>
      <section>
        <p>Your Score</p>
        <div>{myScore}</div>
      </section>
      <div>
        <p>High Score</p>
        <div>{highScore}</div>
      </div>
    </ScoreWrapper>
  );
}

const ScoreWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  justify-content: space-around;
  margin-top: 5vh;

  div {
    font-size: 1.56rem;
    justify-self: end;
  }
`;
