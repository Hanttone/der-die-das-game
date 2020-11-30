import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';

export default function Scores({
  myScore,
  highScore,
}) {
  const [
    currentHighScore,
    setCurrentHighScore,
  ] = useState(0);

  useEffect(() => showHighScore(), []);

  function showHighScore() {
    highScore.map((score) => {
      if (score.score > currentHighScore) {
        return setCurrentHighScore(score.score);
      }
    });
  }

  return (
    <ScoreWrapper>
      <section>
        <p>Your Score</p>
        <div>{myScore}</div>
      </section>
      <div>
        <p>High Score</p>
        <div className="left">
          {currentHighScore}
        </div>
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
