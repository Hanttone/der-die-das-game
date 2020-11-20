import Navigation from "../Components/Navigation/Navigation";
import BottomLayout from "../Components/BottomLayout/BottomLayout";
import styled from "styled-components/macro";
import Header from "../Components/Header/Header"

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