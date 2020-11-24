import styled from 'styled-components/macro';

import Navigation from '../Components/Navigation/Navigation';
import BottomLayout from '../Components/BottomLayout/BottomLayout';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import WordCard from '../Components/WordCard/WordCard';
import Scores from '../Components/Scores/Scores';

export default function GamePage() {
  return (
    <GameWrapper>
      <Navigation></Navigation>
      <Header>Game</Header>
      <Scores
        myScore="100"
        highScore="10000"></Scores>
      <WordCard word="Stuhl" />
      <ButtonWrapper>
        <Button
          width="100%"
          radius="20px"
          text="Der"></Button>
        <Button
          width="100%"
          radius="20px"
          text="Die"></Button>
        <Button
          width="100%"
          radius="20px"
          text="Das"></Button>
      </ButtonWrapper>
      <BottomLayout></BottomLayout>
    </GameWrapper>
  );
}

const GameWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3%;
`;
