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
      <Button
        width="80%"
        radius="28px"
        text="Play"
        row="4"></Button>
      <BottomLayout></BottomLayout>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr;
`;
