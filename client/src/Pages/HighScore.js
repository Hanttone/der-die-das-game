import styled from 'styled-components/macro';

import Navigation from '../Components/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';

export default function HighScore({ scoreData }) {
  return (
    <HighScoreWrapper>
      <Navigation />
      <Header>High Score</Header>
      <HighScoreTableWrapper>
        <div>
          <h2>Player</h2>
          <h2>Score</h2>
          <section className="border">
            <p>1. Maya</p>
            <p>2. Peter</p>
            <p>3. kea</p>
          </section>
          <section>
            <p>1000</p>
            <p>1000</p>
            <p>1000</p>
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
  height: 587px;
  width: 329px;
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

  .border {
    border-right: solid white 2px;
  }

  p {
    padding: 3%;
    font-size: 22px;
    font-family: Silom;
  }
`;
