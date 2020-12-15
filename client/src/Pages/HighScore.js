/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components/macro';
import sortScores from '../Services/sortScores';
import { useState, useEffect } from 'react';
import { useNewHighScore } from '../Services/Context';

import Navigation from '../Modules/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';

export default function HighScore({
  mode,
  scores,
}) {
  const newHighScore = useNewHighScore();
  const [scoreData, setScoreData] = useState(
    scores
  );

  useEffect(() => {
    if (newHighScore) {
      debugger;
      setScoreData([...scoreData, newHighScore]);
    }
  }, []);

  const sortedHighScores = sortScores(scoreData);
  const topTen = sortedHighScores.slice(0, 10);

  return (
    <HighScoreWrapper>
      <Navigation mode={mode} />
      <Header mt="2.5vh" mb="3vh">
        High Score
      </Header>
      <HighScoreTableWrapper>
        <section>
          <h2>Player</h2>
          <h2>Score</h2>
          {topTen.map((player, index) => (
            <ScoreWrapper key={player._id}>
              <p>{index + 1}.</p>
              <p>{player.playerName}</p>
              <p className="score">
                {player.score}
              </p>
            </ScoreWrapper>
          ))}
        </section>
      </HighScoreTableWrapper>
      <WaveDesignBackground mode={mode} />
    </HighScoreWrapper>
  );
}

const HighScoreWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HighScoreTableWrapper = styled.div`
  position: relative;
  height: 75vh;
  width: 87.5%;
  background-color: ${(props) =>
    props.theme.cardBackgroundColor};
  border-radius: 28px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 0p x 10px rgba(0, 0, 0, 0.2);

  section {
    height: 98%;
    width: 90%;
    padding-top: 2vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(11, 1fr);
  }

  h2 {
    font-size: 25px;
    border-bottom: solid
      ${(props) => props.theme.fontColor} 2px;
    align-self: end;
    padding-bottom: 2%;
    padding-left: 3%;
    margin-bottom: 2.5vh;
  }
`;

const ScoreWrapper = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 0.2fr 1.5fr 1fr;
  gap: 2%;
  margin-bottom: 1%;

  p {
    font-size: 20px;
    font-family: Silom;
  }

  .score {
    text-align: center;
  }
`;
