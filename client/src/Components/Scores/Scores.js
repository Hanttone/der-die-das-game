import styled from 'styled-components/macro';

export default function Scores({
  myScore,
  highScore,
}) {
  const maxScore = highScore?.reduce(
    (max, p) => (p.score > max ? p.score : max),
    highScore[0].score
  );

  return (
    <ScoreWrapper>
      <section>
        <p>Your Score</p>
        <div>{myScore}</div>
      </section>
      <div>
        <p>High Score</p>
        <div className="left">{maxScore}</div>
      </div>
    </ScoreWrapper>
  );
}

const ScoreWrapper = styled.section`
  width: 87.5%;
  margin-bottom: 35px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;

  p {
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  div {
    font-size: 1.56rem;
    justify-self: end;

    &.left {
      text-align: right;
    }
  }
`;
