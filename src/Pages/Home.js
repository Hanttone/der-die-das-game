import styled from 'styled-components/macro';
import Navigation from '../Components/Navigation/Navigation';
import Header from '../Components/Header/Header';
import BottomLayout from '../Components/BottomLayout/BottomLayout';
import Button from '../Components/Button/Button';

export default function Home() {
  return (
    <HomeWrapper>
      <Navigation></Navigation>
      <Header>Der, die und das</Header>
      <ButtonWrapper>
        <Button
          width="80%"
          radius="28px"
          text="Play"
          row="4"></Button>
      </ButtonWrapper>
      <BottomLayout></BottomLayout>
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
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 43px;
  z-index: 1;
`;
