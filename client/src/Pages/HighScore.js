import styled from 'styled-components/macro';

import Navigation from '../Components/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';

export default function HighScore() {
  return (
    <HighScoreWrapper>
      <Navigation />
      <Header>High Score</Header>
      <WaveDesignBackground />
    </HighScoreWrapper>
  );
}

const HighScoreWrapper = styled.main`
  height: 100vh;
  width: 100%;
`;
