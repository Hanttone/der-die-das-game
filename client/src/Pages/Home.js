import styled from 'styled-components/macro';
import Navigation from '../Components/Navigation/Navigation';
import Header from '../Components/Header/Header';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Button from '../Components/Button/Button';

export default function Home() {
  return (
    <HomeWrapper>
      <Navigation />
      <Header>Der, die & das</Header>
      <ButtonWrapper>
        <Button
          width="80%"
          radius="28px"
          text="Play"></Button>
      </ButtonWrapper>
      <WaveDesignBackground />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 43px;
  z-index: 1;
`;
