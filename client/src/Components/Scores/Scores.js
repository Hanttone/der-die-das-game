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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => showHighScore(), []);

  function showHighScore() {
    let highestScore = 0;
    console.log(highestScore);
    highScore.map((score) => {
      if (score.score > highestScore) {
        highestScore = score.score;
      }
      return setCurrentHighScore(highestScore);
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
