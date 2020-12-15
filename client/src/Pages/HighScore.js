import styled from 'styled-components/macro';
import sortScores from '../Services/sortScores';
import { useNewHighScore } from '../Services/Context';

import Navigation from '../Modules/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';

export default function HighScore({ scoreData }) {
  const newHighScore = useNewHighScore();
  const sortedHighScores = sortScores(scoreData);
  const topTen = sortedHighScores.slice(0, 10);

  return (
    <HighScoreWrapper>
      <Navigation />
      <Header mt="2.5vh" mb="3vh">
        High Score
      </Header>
      <HighScoreTableWrapper>
        <div>
          <h2>Player</h2>
          <h2>Score</h2>
          <section>
            {topTen.map((player, index) => (
              <>
                <p key={player.id}>
                  {index + 1}. {player.playerName}
                </p>
                <p key={player.id}>
                  {player.score}
                </p>
              </>
            ))}
          </section>
        </div>
      </HighScoreTableWrapper>
      <WaveDesignBackground />
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
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 28px;
  z-index: 1;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  div {
    height: 98%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 9fr;
    width: 95%;
  }

  h2 {
    font-size: 25px;
    border-bottom: solid white 2px;
    align-self: end;
    padding-bottom: 2%;
    padding-left: 3%;
  }

  section {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: repeat(10, 1fr);
    grid-column: span 2;
    align-items: center;
  }

  p {
    font-size: 20px;
    font-family: Silom;
    padding-left: 5%;
  }
`;
