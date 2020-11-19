import Navigation from "../Components/Navigation";
import BottomLayout from "../Components/BottomLayout";
import styled from "styled-components/macro";
import Header from "../Components/Header"

export default function GamePage () {

    return <GameWrapper>
        <Navigation></Navigation>
        <Header>Game</Header>
        <BottomLayout></BottomLayout>
    </GameWrapper>
}

const GameWrapper = styled.main`
height: 100vh;
width: 100%;
`;