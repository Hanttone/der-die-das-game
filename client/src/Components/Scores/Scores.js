import styled from 'styled-components/macro';
import { usePlayerScore } from 'Services/Context';

export default function Scores({ highScore }) {
  const maxScore = highScore?.reduce(
    (max, player) =>
      player.score > max ? player.score : max,
    highScore[0]?.score
  );

  const playerScore = usePlayerScore();

  return (
    <ScoreWrapper>
      <section>
        <p>Your Score</p>
        <div>{playerScore}</div>
      </section>
      <div>
        <p>High Score</p>
        <div className="left">
          {maxScore === undefined ? 0 : maxScore}
        </div>
      </div>
    </ScoreWrapper>
  );
}

const ScoreWrapper = styled.section`
  width: 87.5%;
  margin-bottom: 4vh;

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
